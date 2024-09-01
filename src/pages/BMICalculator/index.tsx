import { Alert, AlertTitle, Button, Collapse, Container, IconButton, Stack, TextField, Typography } from "@mui/material";
import React, { JSX, useState } from "react";
import { useForm } from "react-hook-form";
import { BMICalculation, BMICalculationSchema } from "../../schema/BMICalculationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import CloseIcon from "@mui/icons-material/Close";

export default function BMICalculatorIndex(): JSX.Element {
  const [result, setResult] = useState<number>(0);
  const [resultCategory, setResultCategory] = useState<string>("");
  const [resultOpen, setResultOpen] = useState<boolean>(false);

  const [heightInput, setHeightInput] = useState<number>(0.0);

  const {handleSubmit, register, formState: {errors}} = useForm<BMICalculation>({
    resolver: zodResolver(BMICalculationSchema),
    mode: "onSubmit"
  });

  function onSubmit(data: BMICalculation): void {
    const heightMeter = data.height / 100.0;
    const newResult = data.weight / (heightMeter * heightMeter);
    setResult(newResult);
    setResultOpen(true);

    let newResultCategory = "";
    if(newResult < 18.50) {
      newResultCategory = "Underweight";
    } else if(18.50 <= newResult && newResult <= 24.99) {
      newResultCategory = "Normal";
    } else if(25.00 <= newResult && newResult <= 29.99) {
      newResultCategory = "Pre-obesity";
    } else if(30.00 <= newResult && newResult <= 34.99) {
      newResultCategory = "Obesity class I";
    } else if(35.00 <= newResult && newResult <= 39.99) {
      newResultCategory = "Obesity class II";
    } else if(40.00 <= newResult) {
      newResultCategory = "Obesity class III";
    }
    setResultCategory(newResultCategory);
  }

  function onHeightChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setHeightInput(Number.parseInt(event.currentTarget.value));
  }

  return (
    <Container sx={{
      backgroundColor: "rgba(230,230,230,1)",
      background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(126,233,255,1) 100%)",
      minHeight: "100vh",
      minWidth: "100%",
      paddingBottom: "5rem"
    }}>
      <Typography
        variant="h4"
        align="center"
        paddingBottom={3}
        paddingTop={2}
      >
        Body Mass Index (BMI) Calculator
      </Typography>
      <Alert
        severity="info"
        variant="filled"
        sx={{
          maxWidth: "50vw",
          marginX: "auto",
          marginY: 2
        }}
      >
        <AlertTitle>Info</AlertTitle>
        Body Mass Index is age-independent and applies to all genders of adult people.
      </Alert>
      <Alert
        severity="warning"
        variant="filled"
        sx={{
          maxWidth: "50vw",
          marginX: "auto",
          marginY: 2
        }}
      >
        <AlertTitle>Warning</AlertTitle>
        BMI for children and teenagers uses a different formula.
      </Alert>

      <form onSubmit={(event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        void handleSubmit(onSubmit)(event);
      }}>
        <Stack
          direction="column"
          gap={2}
          sx={{
            marginY: 2,
            alignItems: "center"
          }}
        >
          <Typography variant="h5" marginTop={3}>Count your BMI</Typography>
          <TextField
            label="Height (in cm)"
            {...register("height")}
            error={!!errors.height}
            helperText={errors.height?.message}
          />
          <TextField
            label="Weight (in kg)"
            {...register("weight")}
            error={!!errors.weight}
            helperText={errors.weight?.message}
          />
          <Button type="submit" variant="contained" color="warning">Calculate</Button>
          {result !== 0?
            <Collapse in={resultOpen}>
              <Alert
                severity="info"
                action={
                  <IconButton color="inherit" onClick={() => setResultOpen(false)}>
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                <AlertTitle>Result</AlertTitle>
                Your BMI result: <b>{result.toFixed(3)}</b> ({resultCategory})
              </Alert>
            </Collapse>
            : <></>
          }
        </Stack>
      </form>

      <Stack
        direction="column"
        gap={2}
        sx={{
          marginTop: 10,
          marginBottom: 2,
          alignItems: "center"
        }}
      >
        <Typography variant="h5">
          Or, find the ideal weight
        </Typography>
        <Stack direction="column" gap={2} alignItems="center">
          <TextField label="Height (in cm)" value={heightInput} onChange={onHeightChange} />
          <Button
            variant="contained"
            color="primary"
            type="button"
            href={"/bmi-calculator/height/"+heightInput.toString()+"cm"}
          >
            Find
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

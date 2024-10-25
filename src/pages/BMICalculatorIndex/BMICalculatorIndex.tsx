import { Alert, AlertTitle, Button, Collapse, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { JSX, useState } from "react";
import { useForm } from "react-hook-form";
import { BMICalculation, BMICalculationSchema } from "../../schema/BMICalculationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import CloseIcon from "@mui/icons-material/Close";
import useBMICalculator from "./hooks";
import { useDocumentTitle } from "@uidotdev/usehooks";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

export default function BMICalculatorIndex(): JSX.Element {
  const {
    result,
    setResult,
    resultCategory,
    setResultCategory,
    resultOpen,
    setResultOpen,
  } = useBMICalculator();

  const [heightInput, setHeightInput] = useState<number>(0);

  const {handleSubmit, register, formState: {errors}} = useForm<BMICalculation>({
    resolver: zodResolver(BMICalculationSchema),
    mode: "onSubmit"
  });

  useDocumentTitle("BMI Calculator");

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
    if(event.currentTarget.value === "") {
      setHeightInput(0);
      return;
    }

    const parsedNumber = Number.parseInt(event.currentTarget.value);
    if(Number.isSafeInteger(parsedNumber)) {
      setHeightInput(parsedNumber);
    }
  }

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: "rgba(230,230,230,1)",
        background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(126,233,255,1) 100%)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(17,17,17,1)",
          background: "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(23,22,23,1) 100%)",
        }),
        minHeight: "100vh",
        minWidth: "100%",
        paddingBottom: "5rem"
      })}
    >
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
          maxWidth: {
            sm: "70vw",
            md: "50vw",
            lg: "40vw",
          },
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
          maxWidth: {
            sm: "70vw",
            md: "50vw",
            lg: "40vw",
          },
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
          sx={{
            gap: 2,
            marginY: 4,
            maxWidth: {
              sm: "70vw",
              md: "50vw",
              lg: "40vw",
            },
            marginX: "auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center"
            }}
          >
            Count your BMI
          </Typography>
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
        gap={2}
        sx={{
          marginTop: 8,
          marginBottom: 2,
          maxWidth: {
            sm: "70vw",
            md: "50vw",
            lg: "40vw",
          },
          marginX: "auto",
        }}
      >
        <Typography variant="h5" textAlign="center">
          Or, find the ideal weight
        </Typography>
        <TextField label="Height (in cm)" value={heightInput} onChange={onHeightChange} />
        <ButtonLink
          variant="contained"
          color="primary"
          type="a"
          href={"/bmi-calculator/height/"+heightInput.toString()+"cm"}
          text="Find"
        />
      </Stack>
    </Paper>
  );
}

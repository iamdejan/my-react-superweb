import { Container, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import React, { JSX, useEffect, useState } from "react";

export default function DistanceCalculator(): JSX.Element {
  const [kilometerInput, setKilometerInput] = useState<string>("");
  const [mileInput, setMileInput] = useState<string>("");
  const [nauticalMileInput, setNauticalMileInput] = useState<string>("");
  const [selection, setSelection] = useState<string>("");

  useEffect(() => {
    try {
      switch(selection) {
      case "kilometer": {
        if(kilometerInput === "") {
          setMileInput("");
          setNauticalMileInput("");
          break;
        }
    
        const parsedNumber = Number.parseFloat(kilometerInput);
        setMileInput((0.62 * parsedNumber).toPrecision(6));
        setNauticalMileInput((0.539957 * parsedNumber).toPrecision(6));
        break;
      }
      case "mile": {
        if(mileInput === "") {
          setKilometerInput("");
          setNauticalMileInput("");
          break;
        }

        const parsedNumber = Number.parseFloat(mileInput);
        setKilometerInput((1.609344 * parsedNumber).toPrecision(6));
        setNauticalMileInput((0.868976242 * parsedNumber).toPrecision(6));
        break;
      }
      case "nauticalMile": {
        if(nauticalMileInput === "") {
          setKilometerInput("");
          setMileInput("");
          break;
        }

        const parsedNumber = Number.parseFloat(nauticalMileInput);
        setKilometerInput((1.852 * parsedNumber).toPrecision(6));
        setMileInput((1.15077945 * parsedNumber).toPrecision(6));
        break;
      }
      default: {
        break;
      }
      }
    } catch(e: unknown) {
      console.log(e);
    }
  }, [selection, kilometerInput, mileInput, nauticalMileInput]);

  function onChangedUnit(event: React.ChangeEvent<HTMLInputElement>): void {
    setSelection(event.target.value);
    setKilometerInput("");
    setMileInput("");
    setNauticalMileInput("");
  }

  return (
    <Container sx={{
      backgroundColor: "rgba(230,230,230,1)",
      background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(234,255,234,1) 100%)",
      minHeight:"100vh",
      minWidth:"100%",
      margin:"0",
      paddingBottom:"5rem"
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        Distance Calculator
      </Typography>
      <Container sx={{
        textAlign: "center"
      }}>
        <FormControl>
          <Typography variant="h6" align="center" marginTop={3}>
            Chosen unit for input
          </Typography>
          <RadioGroup onChange={onChangedUnit}>
            <FormControlLabel value="kilometer" control={<Radio />} label="Kilometer" />
            <FormControlLabel value="mile" control={<Radio />} label="Mile" />
            <FormControlLabel value="nauticalMile" control={<Radio />} label="Nautical mile" />
          </RadioGroup>
        </FormControl>
      </Container>

      <Stack gap={2} maxWidth="60%" marginX="auto">
        <Typography variant="h6" align="center" marginTop={3}>
          Values
        </Typography>
        <TextField
          name="kilometer"
          label="Kilometer"
          disabled={selection !== "kilometer"}
          value={kilometerInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            setKilometerInput(event.target.value);
          }}
        />
        <TextField
          name="mile"
          label="Mile"
          disabled={selection !== "mile"}
          value={mileInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            setMileInput(event.target.value);
          }}
        />
        <TextField
          name="nauticalMile"
          label="Nautical Mile"
          disabled={selection !== "nauticalMile"}
          value={nauticalMileInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            setNauticalMileInput(event.target.value);
          }}
        />
      </Stack>
    </Container>
  );
}

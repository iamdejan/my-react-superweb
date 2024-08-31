import { Container, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import React, { JSX } from "react";
import { DistanceUnit, useDistanceCalculator } from "../hooks/useDistanceCalculator";

export default function DistanceCalculator(): JSX.Element {
  const {
    kilometerInput,
    setKilometerInput,
    mileInput,
    setMileInput,
    nauticalMileInput,
    setNauticalMileInput,
    selection,
    setSelection
  } = useDistanceCalculator();

  function onChangedUnit(event: React.ChangeEvent<HTMLInputElement>): void {
    const distanceUnit = event.target.value as DistanceUnit;
    setSelection(distanceUnit);

    // reset all fields
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
            <FormControlLabel
              value={DistanceUnit.Kilometer.toString()}
              checked={selection === DistanceUnit.Kilometer}
              control={<Radio />} 
              label="Kilometer"
            />
            <FormControlLabel 
              value={DistanceUnit.Mile.toString()}
              checked={selection === DistanceUnit.Mile}
              control={<Radio />}
              label="Mile"
            />
            <FormControlLabel
              value={DistanceUnit.NauticalMile.toString()}
              checked={selection === DistanceUnit.NauticalMile}
              control={<Radio />}
              label="Nautical mile"
            />
          </RadioGroup>
        </FormControl>
      </Container>

      <Stack gap={2} maxWidth="60%" marginX="auto">
        <Typography variant="h6" align="center" marginTop={3}>
          Values
        </Typography>
        <TextField
          name={DistanceUnit.Kilometer.toString()}
          label="Kilometer"
          disabled={selection !== DistanceUnit.Kilometer}
          value={kilometerInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            setKilometerInput(event.target.value);
          }}
        />
        <TextField
          name={DistanceUnit.Mile.toString()}
          label="Mile"
          disabled={selection !== DistanceUnit.Mile}
          value={mileInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            setMileInput(event.target.value);
          }}
        />
        <TextField
          name={DistanceUnit.NauticalMile.toString()}
          label="Nautical Mile"
          disabled={selection !== DistanceUnit.NauticalMile}
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

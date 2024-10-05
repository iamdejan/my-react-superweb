import { Container, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import React, { JSX } from "react";
import { useDistanceCalculator } from "./hooks";
import CopyToClipboardButton from "../../components/CopyToClipboardButton";
import { DistanceUnit } from "../../enums/DistanceUnit";
import { useDocumentTitle } from "@uidotdev/usehooks";

export default function DistanceCalculator(): JSX.Element {
  const {
    kilometerInput,
    setKilometerInput,
    mileInput,
    setMileInput,
    nauticalMileInput,
    setNauticalMileInput,
    selection,
    onUnitChanged
  } = useDistanceCalculator();

  useDocumentTitle("Distance Calculator");

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: "rgba(230,230,230,1)",
        background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(234,255,234,1) 100%)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(17,17,17,1)",
          background: "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(23,22,23,1) 100%)",
        }),
        minHeight: "100vh",
        minWidth: "100%",
        margin: "0",
        paddingBottom: "5rem"
      })}
    >
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
          <RadioGroup onChange={onUnitChanged}>
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

      <Stack
        sx={{
          gap: 2,
          maxWidth: {
            sm: "80%",
            md: "60%"
          },
          marginX: "auto",
        }}
      >
        <Typography variant="h6" align="center" marginTop={3}>
          Values
        </Typography>
        <Stack direction="row">
          <TextField
            name={DistanceUnit.Kilometer.toString()}
            label="Kilometer"
            disabled={selection !== DistanceUnit.Kilometer}
            value={kilometerInput}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              event.preventDefault();
              setKilometerInput(event.target.value);
            }}
            fullWidth
          />
          <CopyToClipboardButton input={kilometerInput} />
        </Stack>
        <Stack direction="row">
          <TextField
            name={DistanceUnit.Mile.toString()}
            label="Mile"
            disabled={selection !== DistanceUnit.Mile}
            value={mileInput}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              event.preventDefault();
              setMileInput(event.target.value);
            }}
            fullWidth
          />
          <CopyToClipboardButton input={mileInput} />
        </Stack>
        <Stack direction="row">
          <TextField
            name={DistanceUnit.NauticalMile.toString()}
            label="Nautical Mile"
            disabled={selection !== DistanceUnit.NauticalMile}
            value={nauticalMileInput}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              event.preventDefault();
              setNauticalMileInput(event.target.value);
            }}
            fullWidth
          />
          <CopyToClipboardButton input={nauticalMileInput} />
        </Stack>
      </Stack>
    </Paper>
  );
}

import { Checkbox, Collapse, Container, FormControlLabel, Paper, Slider, Stack, TextField, Typography } from "@mui/material";
import { JSX } from "react";
import CopyToClipboardButton from "../../components/CopyToClipboardButton";
import usePasswordGenerator, { maxPasswordLength } from "./hooks";

export default function PasswordGenerator(): JSX.Element {
  const {
    passwordLength,
    generatedPassword,
    useLowerCase,
    useUpperCase,
    useNumbers,
    useSymbols,
    handleScaleUpdate,
    handleTextFieldUpdate,
    handleLowerCaseUpdate,
    handleUpperCaseUpdate,
    handleNumbersUpdate,
    handleSymbolsUpdate,
  } = usePasswordGenerator();

  return (
    <Container sx={{
      backgroundColor: "rgba(230,230,230,1)",
      background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(234,255,234,1) 100%)",
      minHeight: "100vh",
      minWidth: "100%",
      margin: "0",
      paddingBottom: "5rem",
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        Password Generator
      </Typography>
      <Stack
        gap={3}
        sx={{
          maxWidth: {
            xs: "85%",
            sm: "80%",
            md: "70%",
            lg: "50%",
          },
          marginX: "auto",
        }}
      >
        <Stack direction="row" justifyItems="center" alignItems="center" gap={2}>
          <Slider valueLabelDisplay="off" value={passwordLength} onChange={handleScaleUpdate} max={maxPasswordLength} />
          <TextField
            label="Password Length"
            value={passwordLength}
            onChange={handleTextFieldUpdate}
          />
        </Stack>
      </Stack>

      <Stack
        direction="column"
        gap={1}
        sx={{
          maxWidth: {
            xs: "85%",
            sm: "80%",
            md: "70%",
            lg: "50%",
          },
          marginX: "auto",
          marginBottom: 3,
        }}
        justifyItems="center"
        alignItems="center"
      >
        <FormControlLabel
          control={<Checkbox />}
          checked={useLowerCase}
          onChange={handleLowerCaseUpdate}
          label="Lower Case"
        />
        <FormControlLabel
          control={<Checkbox />}
          checked={useUpperCase}
          onChange={handleUpperCaseUpdate}
          label="Upper Case"
        />
        <FormControlLabel
          control={<Checkbox />}
          checked={useNumbers}
          onChange={handleNumbersUpdate}
          label="Numbers"
        />
        <FormControlLabel 
          control={<Checkbox />} 
          checked={useSymbols} 
          onChange={handleSymbolsUpdate} 
          label="Symbols"
        />
      </Stack>

      <Stack
        gap={3}
        sx={{
          maxWidth: {
            xs: "85%",
            sm: "80%",
            md: "70%",
            lg: "50%",
          },
          marginX: "auto",
        }}
      >
        <Collapse
          in={generatedPassword !== ""} 
        >
          <Paper
            sx={{
              paddingY: 2,
              paddingX: 1,
              textAlign: "center",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" marginBottom={2}>Generated Password</Typography>
            <Stack direction="row" marginX="auto" maxWidth="90%">
              <TextField disabled value={generatedPassword} fullWidth />
              <CopyToClipboardButton input={generatedPassword} />
            </Stack>
          </Paper>
        </Collapse>
      </Stack>
    </Container>
  );
}

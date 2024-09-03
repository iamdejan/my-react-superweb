import { Checkbox, Collapse, Container, FormControlLabel, Paper, Slider, Stack, TextField, Typography } from "@mui/material";
import { JSX, useEffect, useState } from "react";
import CopyToClipboardButton from "../components/CopyToClipboardButton";

const maxPasswordLength = 30;
const lowerCaseAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("a".charCodeAt(0) + i)
);
const upperCaseAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("A".charCodeAt(0) + i)
);
const numberCharacters = Array.from({ length: 10 }, (_, i) =>
  String.fromCharCode("0".charCodeAt(0) + i)
);
const symbolCharacters = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "\"", "<", ">", ",", ".", "?", "/", "~", "`"
];

export default function PasswordGenerator(): JSX.Element {
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  // configurations for generated password's characters
  const [useLowerCase, setUseLowerCase] = useState<boolean>(true);
  const [useUpperCase, setUseUpperCase] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [availableCharacters, setAvailableCharacters] = useState<string[]>([]);

  useEffect(() => {
    let pwd = "";
    if(passwordLength === 0 || availableCharacters.length === 0) {
      setGeneratedPassword("");
      return;
    }

    for(let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.round(Math.random() * availableCharacters.length);
      const randomChar = availableCharacters[randomIndex];
      pwd += randomChar;
    }
    setGeneratedPassword(pwd);
  }, [passwordLength, availableCharacters]);

  useEffect(() => {
    let characters: string[] = [];
    if (useLowerCase) {
      characters = characters.concat(lowerCaseAlphabet);
    }
    if (useUpperCase) {
      characters = characters.concat(upperCaseAlphabet);
    }
    if (useNumbers) {
      characters = characters.concat(numberCharacters);
    }
    if (useSymbols) {
      characters = characters.concat(symbolCharacters);
    }
    setAvailableCharacters(characters);
  }, [useLowerCase, useUpperCase, useNumbers, useSymbols]);

  function handleScaleUpdate(_e: Event, value: number | number[]): void {
    setPasswordLength(value as number);
  }

  function handleLowerCaseUpdate(): void {
    setUseLowerCase(!useLowerCase);
  }

  function handleUpperCaseUpdate(): void {
    setUseUpperCase(!useUpperCase);
  }

  function handleNumbersUpdate(): void {
    setUseNumbers(!useNumbers);
  }

  function handleSymbolsUpdate(): void {
    setUseSymbols(!useSymbols);
  }

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
          maxWidth: "50vw",
          marginX: "auto",
        }}
      >
        <Stack direction="row" justifyItems="center" alignItems="center" gap={2}>
          <Slider valueLabelDisplay="off" value={passwordLength} onChange={handleScaleUpdate} max={maxPasswordLength} />
          <TextField
            label="Password Length"
            value={passwordLength}
          />
        </Stack>
      </Stack>

      <Stack
        direction="column"
        gap={1}
        sx={{
          maxWidth: "50vw",
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
          maxWidth: "50vw",
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
              <TextField disabled={true} value={generatedPassword} sx={{flexGrow: 1}} />
              <CopyToClipboardButton input={generatedPassword} />
            </Stack>
          </Paper>
        </Collapse>
      </Stack>
    </Container>
  );
}

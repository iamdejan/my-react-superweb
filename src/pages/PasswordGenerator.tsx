import { Collapse, Container, Paper, Slider, Stack, TextField, Typography } from "@mui/material";
import { JSX, useEffect, useState } from "react";
import CopyToClipboardButton from "../components/CopyToClipboardButton";

const maxPasswordLength = 30;
const lowercaseAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("a".charCodeAt(0) + i)
);

export default function PasswordGenerator(): JSX.Element {
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  useEffect(() => {
    let pwd = "";
    for(let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.round(Math.random() * 26);
      const randomChar = lowercaseAlphabet[randomIndex];
      pwd += randomChar;
    }
    setGeneratedPassword(pwd);
  }, [passwordLength]);

  function handleScaleUpdate(_e: Event, value: number | number[]): void {
    setPasswordLength(value as number);
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

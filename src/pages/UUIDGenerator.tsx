import { Alert, Button, Container, Paper, Slider, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { JSX, useEffect, useState } from "react";

const maxCount = 30;

export default function UUIDGenerator(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [uuid, setUUID] = useState<string>("");
  const [uuidList, setUUIDList] = useState<string[]>([]);

  useEffect(() => {
    setUUID(crypto.randomUUID());
  }, []);

  function handleScaleUpdate(_e: Event, value: number | number[]): void {
    setCount(value as number);
  }

  function handleInputUpdate(event: React.ChangeEvent<HTMLInputElement>): void {
    if(event.target.value === "") {
      setCount(0);
      return;
    }
    setCount(Number.parseInt(event.target.value));
  }

  function onClick(): void {
    const generatedUUIDs: string[] = [];
    for(let i = 1; i <= count; i++) {
      generatedUUIDs.push(crypto.randomUUID());
    }
    setUUIDList(generatedUUIDs);
  }

  return(
    <Container sx={{
      backgroundColor: "rgba(230,230,230,1)",
      background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(227,224,255,1) 100%)",
      minHeight: "100vh",
      minWidth: "100vw",
      paddingBottom: "5rem"
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        UUID Generator
      </Typography>
      <Stack
        gap={3}
        sx={{
          maxWidth: "40vw",
          marginX: "auto"
        }}>
        <Paper
          elevation={1}
          sx={{
            paddingY: 1
          }}
        >
          <Typography variant="h5" fontWeight={600} textAlign="center">
            {uuid}
          </Typography>
        </Paper>
        <Alert severity="info">
          Refresh page to generate new UUID value.
        </Alert>
      </Stack>
      <Stack
        gap={3}
        sx={{
          maxWidth: "50vw",
          marginX: "auto",
        }}
      >
        <Typography variant="h5" textAlign="center" marginTop={10}>
          Or, generate multiple UUIDs at the same time
        </Typography>
        <Stack direction="row" justifyItems="center" alignItems="center" gap={2}>
          <Slider valueLabelDisplay="off" value={count} onChange={handleScaleUpdate} max={maxCount} />
          <TextField
            label="Count"
            value={count}
            onChange={handleInputUpdate}
          />
        </Stack>
        <Button variant="contained" sx={{ marginX: "auto" }} type="button" onClick={onClick}>
          Generate
        </Button>

        <TableContainer component={Paper} sx={{marginTop: 3, maxHeight: "60vh", maxWidth: "30vw", marginX: "auto"}}>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontWeight: "650" }}>UUID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uuidList.map((uuidValue, index) => (
                <TableRow key={index}>
                  <TableCell>{uuidValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
}
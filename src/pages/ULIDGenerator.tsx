import { Alert, AlertTitle, Button, Container, Paper, Slider, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { JSX, useEffect, useState } from "react";
import CopyToClipboardButton from "../components/CopyToClipboardButton";
import { monotonicFactory } from "ulidx";

const maxULIDCount = 30;
const ulid = monotonicFactory();

export default function ULIDGenerator(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [ulidList, setULIDList] = useState<string[]>([]);
  const [seed, setSeed] = useState<number>(new Date().getTime());

  useEffect(() => {
    const generatedULIDs: string[] = [];
    for(let i = 1; i <= count; i++) {
      const generatedULID = ulid(seed);
      generatedULIDs.push(generatedULID);
    }
    setULIDList(generatedULIDs);
  }, [seed, count]);

  function handleScaleUpdate(_e: Event, value: number | number[]): void {
    setCount(value as number);
  }

  function handleTextFieldUpdate(event: React.ChangeEvent<HTMLInputElement>): void {
    if(event.target.value === "") {
      setCount(0);
      return;
    }
    const parsedInput = Number.parseInt(event.target.value);
    setCount(Math.min(parsedInput, maxULIDCount));
  }

  return(
    <Container sx={{
      backgroundColor: "rgba(230,230,230,1)",
      background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(227,224,255,1) 100%)",
      minHeight: "100vh",
      minWidth: "100%",
      paddingBottom: "5rem"
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        ULID Generator
      </Typography>
      <Alert
        severity="info"
        sx={{
          maxWidth: "50vw",
          marginX: "auto",
          marginTop: 2,
          marginBottom: 7
        }}
      >
        <AlertTitle><b>What is ULID?</b></AlertTitle>
        ULID (Universally Unique Lexicographically Sortable Identifier) is a 26-character string (128 bits)
        consisting of a timestamp component and a random component, both base32 encoded.
        The timestamp component provides millisecond precision,
        while the random component ensures uniqueness.
        Unlike traditional UUIDs, ULIDs can be monotonically ordered and sorted,
        making them particularly useful in applications where data needs to be sorted by time.
      </Alert>
      <Stack
        gap={3}
        sx={{
          maxWidth: "50vw",
          marginX: "auto",
        }}
      >
        <Stack direction="row" justifyItems="center" alignItems="center" gap={2}>
          <Slider valueLabelDisplay="off" value={count} onChange={handleScaleUpdate} max={maxULIDCount} />
          <TextField
            type="number"
            label="Count"
            value={count}
            onChange={handleTextFieldUpdate}
          />
        </Stack>
        <Button
          variant="contained"
          sx={{ marginX: "auto" }}
          type="button"
          onClick={() => setSeed(new Date().getTime())}
        >
          Refresh Seed
        </Button>
        <TableContainer
          component={Paper}
          sx={{
            marginTop: 3,
            maxHeight: "60vh",
            maxWidth: "35vw",
            marginX: "auto"
          }}
        >
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontWeight: "650", maxWidth: "95vw" }}>ULID</TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "650", maxWidth: "5vw" }}>Copy</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ulidList.map((ulidValue, index) => (
                <TableRow key={index}>
                  <TableCell>{ulidValue}</TableCell>
                  <TableCell><CopyToClipboardButton input={ulidValue} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
}

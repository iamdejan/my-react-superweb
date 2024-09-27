import { Alert, AlertTitle, Button, Container, Paper, Slider, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { JSX } from "react";
import CopyToClipboardButton from "../../components/CopyToClipboardButton";
import useULIDGenerator, { maxULIDCount } from "./hooks";

export default function ULIDGenerator(): JSX.Element {
  const {
    count,
    ulidList,
    handleScaleUpdate,
    handleTextFieldUpdate,
    refreshSeed
  } = useULIDGenerator();

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
          maxWidth: {
            sm: "75%",
            md: "60%",
            lg: "50%",
          },
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
          maxWidth: {
            lg: "50vw"
          },
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
          onClick={refreshSeed}
        >
          Refresh Seed
        </Button>
        <TableContainer
          component={Paper}
          sx={{
            marginTop: 3,
            maxHeight: {
              sm: "60vh"
            },
            maxWidth: {
              xs: "80vw",
              sm: "65vw",
              md: "50vw",
              lg: "40vw"
            },
            marginX: "auto"
          }}
        >
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "650",
                    maxWidth: {
                      sm: "60vw",
                      md: "95vw",
                    },
                  }}
                >
                  ULID
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "650",
                    maxWidth: {
                      sm: "40vw",
                      lg: "5vw"
                    },
                  }}
                >
                  Copy
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ulidList.map((ulidValue, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      fontSize: {
                        xs: "0.8rem",
                        sm: "0.85rem",
                        md: "0.9rem",
                        lg: "1rem",
                      }
                    }}
                  >
                    {ulidValue}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <CopyToClipboardButton input={ulidValue} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
}

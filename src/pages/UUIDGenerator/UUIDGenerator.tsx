import { Alert, Button, Container, Paper, Slider, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { JSX } from "react";
import CopyToClipboardButton from "../../components/CopyToClipboardButton";
import { useDocumentTitle } from "@uidotdev/usehooks";
import useUUIDGenerator, { maxUUIDCount } from "./hooks";

export default function UUIDGenerator(): JSX.Element {
  const { 
    uuid,
    count,
    uuidList,
    handleScaleUpdate,
    handleTextFieldUpdate,
    onGenerateButtonClick,
  } = useUUIDGenerator();

  useDocumentTitle("UUID Generator");

  return(
    <Container sx={{
      backgroundColor: "rgba(230,230,230,1)",
      background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(227,224,255,1) 100%)",
      minHeight: "100vh",
      minWidth: "100%",
      paddingBottom: "5rem"
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        UUID Generator
      </Typography>
      <Stack
        sx={{
          gap: 3,
          maxWidth: {
            sm: "65%",
            md: "50%",
            lg: "40%",
          },
          marginX: "auto"
        }}>
        <Paper
          elevation={1}
          sx={{
            padding: 2,
          }}
        >
          <Stack direction="row" alignItems="center">
            <Typography
              fontSize={{
                xs: "0.9rem",
                md: "1.2rem",
                lg: "1.3rem",
              }}
              fontWeight="550"
              textAlign="center"
              flexGrow={1}
            >
              {uuid}
            </Typography>
            <CopyToClipboardButton input={uuid} />
          </Stack>
        </Paper>
        <Alert severity="info">
          Refresh page to generate new UUID value.<p />
          <Button variant="contained" onClick={() => window.location.reload()}>Refresh page</Button>
        </Alert>
      </Stack>
      <Stack
        gap={3}
        sx={{
          maxWidth: {
            lg: "50%"
          },
          marginX: "auto",
        }}
      >
        <Typography variant="h5" textAlign="center" marginTop={10}>
          Or, generate multiple UUIDs at the same time
        </Typography>
        <Stack direction="row" justifyItems="center" alignItems="center" gap={2}>
          <Slider valueLabelDisplay="off" value={count} onChange={handleScaleUpdate} max={maxUUIDCount} />
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
          onClick={onGenerateButtonClick}
        >
          Generate
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
          <Table
            stickyHeader
            size="small"
          >
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
                  UUID
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
              {uuidList.map((uuidValue, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      fontSize: {
                        xs: "0.75rem",
                        sm: "0.8rem",
                        md: "0.9rem",
                        lg: "1rem",
                      }
                    }}
                  >
                    {uuidValue}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <CopyToClipboardButton input={uuidValue} />
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

import { Alert, Button, Container, Paper, Slider, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { JSX } from "react";
import CopyToClipboardButton from "../components/CopyToClipboardButton";
import { useDocumentTitle } from "@uidotdev/usehooks";
import useUUIDGenerator, { maxCount } from "../hooks/useUUIDGenerator";

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
          <Stack direction="row" textAlign="center">
            <Typography variant="h5" fontWeight={600} textAlign="center" flexGrow={1}>
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
            maxHeight: "60vh",
            maxWidth: "35vw",
            marginX: "auto"
          }}
        >
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontWeight: "650", maxWidth: "95vw" }}>UUID</TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "650", maxWidth: "5vw" }}>Copy</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uuidList.map((uuidValue, index) => (
                <TableRow key={index}>
                  <TableCell>{uuidValue}</TableCell>
                  <TableCell><CopyToClipboardButton input={uuidValue} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
}

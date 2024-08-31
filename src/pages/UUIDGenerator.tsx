import { Alert, Container, Paper, Stack, Typography } from "@mui/material";
import { JSX } from "react";

export default function UUIDGenerator(): JSX.Element {
  const uuid = crypto.randomUUID();
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
    </Container>
  );
}

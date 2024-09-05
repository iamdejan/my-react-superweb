import { Card, CardActionArea, CardContent, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { JSX } from "react";

const layout = [
  ["7", "8", "9", "%", "√"],
  ["4", "5", "6", "*", "/"],
  ["1", "2", "3", "+", "-"],
  ["0", "000", ".", "=", "C"],
];

export default function Calculator(): JSX.Element {
  return (
    <Container sx={{
      backgroundColor: "rgba(230,230,230,1)",
      background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(234,255,234,1) 100%)",
      minHeight: "100vh",
      minWidth: "100%",
      margin: "0",
      paddingBottom: "5rem"
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        Calculator
      </Typography>

      <Paper sx={{
        maxWidth: "75%",
        marginX: "auto",
        padding: 3,
        backgroundColor: "rgba(255,255,255,0.5)",
      }}
      >
        <Stack>
          <TextField fullWidth sx={{marginBottom: 2}} />
          <Stack gap={2}>
            {layout.map((row, i) => (
              <Stack key={i} direction="row" gap={2} justifyContent="space-evenly">
                {row.map((col, j) => (
                  <Card key={j} sx={{
                    minWidth: "15%"
                  }}>
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="h4" textAlign="center">
                          {col}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}

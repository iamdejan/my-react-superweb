import { Card, CardActionArea, CardContent, Container, Paper, Stack, Typography } from "@mui/material";
import { JSX, useState } from "react";

const layout = [
  ["7", "8", "9", "(", ")"],
  ["4", "5", "6", "*", "/"],
  ["1", "2", "3", "+", "-"],
  ["0", "000", ".", "=", "C"],
];
const validCharacterSet = new Set(layout.flat());

export default function Calculator(): JSX.Element {
  const [display, setDisplay] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  function calculate(): void {
    for(const c of display) {
      if(!validCharacterSet.has(c)) {
        setDisplay("Invalid input");
        setIsError(true);
        return;
      }
    }

    try {
      const result: unknown = eval(display);
      setDisplay(result as string);
    } catch(error: unknown) {
      setDisplay(`Error: ${error as string}`);
      setIsError(true);
    }
  }

  function handleButtonClicked(value: string): void {
    switch(value) {
    case "C": {
      setDisplay("");
      break;
    }
    case "=": {
      calculate();
      break;
    }
    default: {
      if(isError) {
        setIsError(false);
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
      break;
    }
    }
  }

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
          <Paper
            elevation={3}
            variant="outlined"
            sx={{
              width: "95%",
              alignSelf: "center",
              marginBottom: 2,
              paddingY: 2,
              paddingX: 5,
              textAlign: "right",
              height: "90px",
            }}
          >
            <Typography variant="h3">{display}</Typography>
          </Paper>
          <Stack gap={2}>
            {layout.map((row, i) => (
              <Stack
                key={i}
                direction="row"
                gap={2}
                justifyContent="space-evenly"
              >
                {row.map((text, j) => (
                  <Card
                    key={j}
                    sx={{
                      minWidth: "15%",
                      borderRadius: "2rem"
                    }}
                  >
                    <CardActionArea onClick={() => handleButtonClicked(text)}>
                      <CardContent>
                        <Typography variant="h4" textAlign="center">
                          {text}
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

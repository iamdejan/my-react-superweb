import { Card, CardActionArea, CardContent, Paper, Stack, Typography } from "@mui/material";
import { JSX } from "react";
import useCalculator, { layout } from "./hooks";

export default function Calculator(): JSX.Element {
  const {display, handleButtonClicked} = useCalculator();

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: "rgba(230,230,230,1)",
        background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(234,255,234,1) 100%)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(17,17,17,1)",
          background: "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(23,22,23,1) 100%)",
        }),
        minHeight: "100vh",
        minWidth: "100%",
        margin: "0",
        paddingBottom: "5rem"
      })}
    >
      <Typography variant="h4" align="center" paddingTop={2} paddingBottom={3}>
        Calculator
      </Typography>

      <Paper 
        sx={(theme) => ({
          maxWidth: "75%",
          marginX: "auto",
          padding: 3,
          backgroundColor: "rgba(255,255,255,0.5)",
          ...theme.applyStyles("dark", {
            backgroundColor: "rgba(50,50,50,1)",
          })
        })}
      >
        <Stack>
          <Paper
            elevation={3}
            variant="outlined"
            sx={{
              width: "95%",
              alignContent: "center",
              marginBottom: 2,
              paddingY: {
                xs: 0.5,
                sm: 0.75,
                md: 1,
                lg: 2
              },
              paddingX: {
                xs: 1,
                md: 3,
                lg: 5,
              },
              textAlign: "right",
              height: {
                xs: "50px",
                sm: "60px",
                md: "70px",
                lg: "90px",
              },
            }}
          >
            <Typography
              sx={(theme) => ({
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "1.75rem",
                  lg: "2.5rem",
                },
                ...theme.applyStyles("dark", {
                  color: "yellow"
                })
              })}
            >
              {display}
            </Typography>
          </Paper>
          <Stack gap={2}>
            {layout.map((row, i) => (
              <Stack
                key={i}
                direction="row"
                gap={{
                  sm: 1,
                  lg: 2
                }}
                justifyContent="space-evenly"
              >
                {row.map((text, j) => (
                  <Card
                    key={j}
                    sx={{
                      minWidth: {
                        xs: "10%",
                        sm: "15%",
                      },
                      borderRadius: {
                        xs: "0.5rem",
                        sm: "1rem",
                        md: "1.5rem",
                        lg: "2rem",
                      }
                    }}
                  >
                    <CardActionArea onClick={() => handleButtonClicked(text)}>
                      <CardContent>
                        <Typography
                          textAlign="center"
                          sx={{
                            fontSize: {
                              xs: "0.7rem",
                              sm: "1rem",
                              lg: "1.5rem",
                            },
                          }}
                        >
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
    </Paper>
  );
}

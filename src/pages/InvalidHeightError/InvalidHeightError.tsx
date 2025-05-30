import { Alert, AlertTitle, Paper } from "@mui/material";
import { getRouteApi } from "@tanstack/react-router";
import { useDocumentTitle } from "@uidotdev/usehooks";
import { JSX } from "react";

const route = getRouteApi("/bmi-calculator/height/$height");

export default function InvalidHeightError(): JSX.Element {
  useDocumentTitle("Invalid Height Error");
  const { height } = route.useParams();
  return (
    <Paper
      sx={(theme) => ({
        minWidth: "100vw",
        minHeight: "100vh",
        justifyContent: "center",
        alignContent: "center",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(17,17,17,1)",
        }),
        borderRadius: "0",
      })}
    >
      <Alert
        severity="error"
        sx={{
          maxWidth: {
            sm: "75vw",
            md: "60vw",
            lg: "45vw",
          },
          marginX: "auto",
          fontSize: {
            sm: "12pt",
            md: "14pt",
            lg: "15pt",
          },
          fontWeight: 650,
        }}
      >
        <AlertTitle
          sx={{
            fontSize: {
              sm: "14pt",
              md: "16pt",
              lg: "17pt",
            },
          }}
        >
          <b>Error!</b>
        </AlertTitle>
        Invalid height of {height}. It should be in the format of: number +
        "cm".
        <br />
        Example: 165cm.
      </Alert>
    </Paper>
  );
}

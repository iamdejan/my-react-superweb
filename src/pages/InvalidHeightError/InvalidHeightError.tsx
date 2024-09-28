import { Alert, AlertTitle, Container } from "@mui/material";
import { getRouteApi } from "@tanstack/react-router";
import { useDocumentTitle } from "@uidotdev/usehooks";
import { JSX } from "react";

const route = getRouteApi("/bmi-calculator/height/$height");

export default function InvalidHeightError(): JSX.Element {
  useDocumentTitle("BMI Calculator Error");
  const { height } = route.useParams();
  return (
    <Container
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Alert severity="error" sx={{
        maxWidth: "40vw",
        marginX: "auto",
        fontSize: "15pt",
        fontWeight: 650,
      }}>
        <AlertTitle fontSize="17pt"><b>Error!</b></AlertTitle>
        Invalid height of {height}. It should be in the format of: number + "cm".<br />
        Example: 165cm.
      </Alert>
    </Container>
  );
}

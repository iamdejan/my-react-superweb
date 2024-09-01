import { JSX } from "react";
import { getRouteApi } from "@tanstack/react-router";
import { Container, Typography } from "@mui/material";

const route = getRouteApi("/bmi-calculator/height/$height");

export default function BMICalculatorDetail(): JSX.Element {
  const { height } = route.useParams();
  return (
    <Container sx={{
      backgroundColor: "rgba(230,230,230,1)",
      background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(126,233,255,1) 100%)",
      minHeight: "100vh",
      minWidth: "100%",
      paddingBottom: "5rem"
    }}>
      <Typography variant="h5" align="center" marginTop={2} marginBottom={3}>
        Ideal weight for {height}
      </Typography>
    </Container>
  );
}

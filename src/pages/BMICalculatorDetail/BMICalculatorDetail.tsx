import { JSX } from "react";
import { getRouteApi } from "@tanstack/react-router";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useDocumentTitle } from "@uidotdev/usehooks";

const digits = 3;
const route = getRouteApi("/bmi-calculator/height/$height");

function calculateLowerBound(height: number): number {
  return 18.5 * (height / 100.0) ** 2;
}

function calculateUpperBound(height: number): number {
  return 24.99 * (height / 100.0) ** 2;
}

export default function BMICalculatorDetail(): JSX.Element {
  const { height } = route.useLoaderData();
  useDocumentTitle(`Ideal weight for ${height.toString()} cm`);

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: "rgba(230,230,230,1)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(126,233,255,1) 100%)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(17,17,17,1)",
          background:
            "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(23,22,23,1) 100%)",
        }),
        minHeight: "100vh",
        minWidth: "100%",
        paddingBottom: "5rem",
        borderRadius: "0",
      })}
    >
      <Typography variant="h5" align="center" paddingTop={2} paddingBottom={3}>
        Ideal weight for {height} cm
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          marginY: 2,
          maxWidth: {
            sm: "60vw",
            md: "40vw",
            lg: "30vw",
          },
          marginX: "auto",
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell width="70%" sx={{ fontWeight: "650" }}>
                Description
              </TableCell>
              <TableCell width="30%" sx={{ fontWeight: "650" }}>
                Ideal Weight
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Lower Bound</TableCell>
              <TableCell>
                {calculateLowerBound(height).toFixed(digits)} kg
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Upper Bound</TableCell>
              <TableCell>
                {calculateUpperBound(height).toFixed(digits)} kg
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Paper
        sx={{
          padding: 3,
          marginY: 2,
          maxWidth: {
            sm: "60vw",
            md: "40vw",
            lg: "30vw",
          },
          marginX: "auto",
        }}
      >
        Formula:
        <List>
          <ListItem disablePadding>
            <ListItemText primary="• Lower Bound: 18.5 * (height in cm) * (height in cm)" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="• Upper Bound: 24.99 * (height in cm) * (height in cm)" />
          </ListItem>
        </List>
      </Paper>
    </Paper>
  );
}

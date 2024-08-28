import { Alert, AlertTitle, Container, Typography } from "@mui/material";
import { JSX } from "react";

export default function ToDoList(): JSX.Element {
  return (
    <Container sx={{
      backgroundColor: "rgb(255,255,255)",
      background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(234,255,234,1) 100%)",
      minHeight:"100vh",
      minWidth:"100%",
      margin:"0",
      padding:"0",
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        To-Do List
      </Typography>
      <Alert severity="warning" variant="filled">
        <AlertTitle>Be Aware</AlertTitle>
        This to-do list stores the list of to-do activities locally.
        Currently, there's no plan to integrate this feature with database.
      </Alert>
    </Container>
  );
}

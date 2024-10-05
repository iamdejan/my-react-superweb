import { CircularProgress, Paper } from "@mui/material";
import { JSX } from "react";

export default function Loading(): JSX.Element {
  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: "rgba(230,230,230,1)",
        background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(255,243,250,1) 100%)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(17,17,17,1)",
          background: "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(23,22,23,1) 100%)",
        }),
        minHeight: "100vh",
        minWidth: "100%",
        margin: 0,
        padding: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <CircularProgress />
    </Paper>
  );
}

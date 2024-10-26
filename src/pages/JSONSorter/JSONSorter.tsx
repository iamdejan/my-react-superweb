import { Button, Container, FormControlLabel, Paper, Switch, Typography, useColorScheme } from "@mui/material";
import { CSSProperties, JSX } from "react";
import useJSONSorter from "./hooks";

function textareaStyle(mode: "light"|"dark"|"system"): CSSProperties {
  let properties: CSSProperties = {
    width: "100%",
    height: "100%",
    fontSize: "1rem"
  };

  if(mode === "dark") {
    properties = {
      ...properties,
      backgroundColor: "rgba(35,35,35,1)",
      color: "yellow"
    };
  }

  return properties;
}

export default function JSONSorter(): JSX.Element|null {
  const { text, sortArrays, handleTextAreaChanged, handleSortButtonClicked, handleSortArraysSwitchChanged } = useJSONSorter();
  const { mode } = useColorScheme();
  if (!mode) {
    return null;
  }

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: "rgba(230,230,230,1)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(80,80,80,1)",
        }),
        minHeight: "100vh",
        minWidth: "100%",
        margin: "0",
        paddingBottom: "5rem",
      })}
    >
      <Typography variant="h4" align="center" paddingTop={2} paddingBottom={3}>
        JSON Recursive Sorter
      </Typography>
      <Container sx={{
        width: "90vw",
        height: "50vh",
        marginX: "auto"
      }}>
        <FormControlLabel
          control={<Switch />}
          sx={{
            maxWidth: "fit-content",
            marginX: "auto",
            justifyContent: "center",
            display: "flex",
            marginBottom: 2
          }}
          label="Sort arrays"
          checked={sortArrays}
          onChange={handleSortArraysSwitchChanged}
        />
        <textarea
          style={textareaStyle(mode)}
          onChange={handleTextAreaChanged}
          value={text}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => void handleSortButtonClicked()}
          type="button"
          sx={{
            marginTop: "2rem"
          }}
        >
          Sort
        </Button>
      </Container>
    </Paper>
  );
}

import { Button, Container, FormControlLabel, Paper, Switch, Typography, useColorScheme } from "@mui/material";
import { CSSProperties, JSX } from "react";
import useJSONSorter from "./hooks";

function textareaStyle(mode: "light"|"dark"|"system"): CSSProperties {
  let defaultProperties: CSSProperties = {
    width: "100%",
    height: "100%",
    fontSize: "1rem"
  };

  if(mode === "dark") {
    defaultProperties = {
      ...defaultProperties,
      backgroundColor: "rgba(35,35,35,1)",
      color: "yellow"
    };
  }

  return defaultProperties;
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
        background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(255,230,194,1) 100%)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(17,17,17,1)",
          background: "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(23,22,23,1) 100%)",
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
      </Container>
      <Container
        sx={{
          maxWidth: "30vw",
          marginX: "auto",
          marginTop: 10
        }}
      >
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => void handleSortButtonClicked()}
          type="button"
        >
          Sort
        </Button>
      </Container>
    </Paper>
  );
}

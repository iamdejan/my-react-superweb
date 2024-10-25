import { Alert, Button, Container, Paper, Typography, useColorScheme } from "@mui/material";
import { CSSProperties, JSX, useState } from "react";
import { Differ, DiffResult, Viewer } from "json-diff-kit";

import "json-diff-kit/dist/viewer.css";

function textareaStyle(mode: "light"|"dark"|"system"): CSSProperties {
  let properties: CSSProperties = {
    width: "46%",
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

function diffViewerStyle(mode: "light"|"dark"|"system"): CSSProperties {
  let properties: CSSProperties = {
    width: "100%"
  };

  if(mode === "dark") {
    properties = {
      ...properties,
      color: "black"
    };
  }

  return properties;
}

const differ: Differ = new Differ({
  detectCircular: true,
  showModifications: true,
  arrayDiffMethod: "unorder-lcs",
  recursiveEqual: true
});

export default function JSONCompare(): JSX.Element|null {
  const [before, setBefore] = useState<string>("{\"a\": \"b\", \"c\": \"c\"}");
  const [after, setAfter] = useState<string>("{\"c\": \"c\", \"b\": \"a\"}");

  const [diffResult, setDiffResult] = useState<readonly [DiffResult[], DiffResult[]]>([[], []]);

  function compareJSON(): void {
    if(!before || !after) {
      setDiffResult([[], []]);
      return;
    }
    
    const beforeObject = JSON.parse(before) as unknown;
    const afterObject = JSON.parse(after) as unknown;

    setDiffResult(differ.diff(beforeObject, afterObject));
  }

  const { mode } = useColorScheme();
  if (!mode) {
    return null;
  }

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: "rgba(255,255,255,1)",
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
        JSON Compare
      </Typography>
      <Alert severity="info" sx={{margin: "1rem", justifySelf: "center"}}>
        You don't need to sort the JSON. It will be sorted automatically.
      </Alert>
      <Container sx={{
        display: "flex",
        width: "90vw",
        height: "50vh",
        marginX: "auto",
        gap: {
          sm: "1rem",
          md: "2rem"
        },
        justifyContent: "center",
      }}>
        <textarea
          style={textareaStyle(mode)}
          name="before"
          placeholder="Before"
          value={before}
          onChange={(event) => setBefore(event.target.value)}
        />
        <textarea
          style={textareaStyle(mode)}
          name="after"
          placeholder="After"
          value={after}
          onChange={(event) => setAfter(event.target.value)}
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
          type="button"
          onClick={compareJSON}
        >
          Compare
        </Button>
      </Container>
      <Container
        sx={{
          marginTop: "2rem",
        }}
      >
        <Viewer
          diff={diffResult}
          indent={4}
          lineNumbers={true}
          highlightInlineDiff={true}
          style={diffViewerStyle(mode)}
        />
      </Container>
    </Paper>
  );
}

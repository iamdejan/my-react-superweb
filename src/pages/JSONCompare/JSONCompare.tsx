import { Box, Button, FormControlLabel, Paper, Switch, Typography, useColorScheme } from "@mui/material";
import { CSSProperties, JSX, useMemo, useState } from "react";
import { Differ, DiffResult, Viewer } from "json-diff-kit";

import "json-diff-kit/dist/viewer.css";

function textareaStyle(mode: "light"|"dark"|"system"): CSSProperties {
  let properties: CSSProperties = {
    width: "50%",
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
    width: "100%",
    marginTop: "2rem"
  };

  if(mode === "dark") {
    properties = {
      ...properties,
      color: "black"
    };
  }

  return properties;
}

const emptyDiffResult: readonly [DiffResult[], DiffResult[]] = [[], []];

export default function JSONCompare(): JSX.Element|null {
  const [before, setBefore] = useState<string>("{\"a\":\"b\",\"c\":0.2,\"numbers\":[4,3,2]}");
  const [after, setAfter] = useState<string>("{\"c\": 0.2, \"b\": \"a\",\"numbers\":[1,2,3]}");

  const [keepOrderInArrays, setKeepOrderInArrays] = useState<boolean>(false);
  const [diffResult, setDiffResult] = useState<readonly [DiffResult[], DiffResult[]]>(emptyDiffResult);

  const differ: Differ = useMemo<Differ>(() => {
    return new Differ({
      detectCircular: true,
      showModifications: true,
      arrayDiffMethod: keepOrderInArrays? "lcs": "unorder-lcs",
      recursiveEqual: true
    });
  }, [keepOrderInArrays]);

  function handleSortArrayChange(): void {
    setKeepOrderInArrays(!keepOrderInArrays);
    setDiffResult(emptyDiffResult);
  }

  function compareJSON(): void {
    if(!before || !after) {
      setDiffResult(emptyDiffResult);
      return;
    }
    
    const beforeObject = JSON.parse(before) as unknown;
    const afterObject = JSON.parse(after) as unknown;

    setDiffResult(differ.diff(beforeObject, afterObject));
  }

  function resetDiffResult(): void {
    setDiffResult(emptyDiffResult);
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
      <Box
        sx={{
          maxWidth: {
            xs: "95%",
            sm: "90%",
            md: "75%"
          },
          marginX: "auto",
          alignItems: "center"
        }}
      >
        <FormControlLabel
          control={<Switch />}
          sx={{
            maxWidth: "fit-content",
            marginX: "auto",
            justifyContent: "center",
            display: "flex",
            marginBottom: 2
          }}
          label={"Keep order in arrays? "+(keepOrderInArrays? "Yes": "No")}
          checked={keepOrderInArrays}
          onChange={handleSortArrayChange}
        />
        <Box sx={{
          display: "flex",
          height: "50vh",
          gap: {
            sm: "1rem",
            md: "2rem"
          }
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
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "2rem",
            gap: "2rem"
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
          <Button
            variant="outlined"
            fullWidth
            type="button"
            onClick={resetDiffResult}
          >
            Clear comparison result
          </Button>
        </Box>
        <Viewer
          diff={diffResult}
          indent={4}
          lineNumbers={true}
          highlightInlineDiff={true}
          style={diffViewerStyle(mode)}
        />
      </Box>
    </Paper>
  );
}

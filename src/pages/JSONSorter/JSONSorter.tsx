import { Button, Container, FormControlLabel, Switch, Typography } from "@mui/material";
import { JSX } from "react";
import useJSONSorter from "../../hooks/useJSONSorter";

export default function JSONSorter(): JSX.Element {
  const { text, sortArrays, handleTextAreaChanged, handleSortButtonClicked, handleSortArraysSwitchChanged: handleSortArraysSwitchChanged } = useJSONSorter();

  return (
    <Container sx={{
      backgroundColor: "rgba(230,230,230,1)",
      background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(255,230,194,1) 100%)",
      minHeight: "100vh",
      minWidth: "100%",
      margin: "0",
      paddingBottom: "5rem",
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
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
        <textarea style={{
          width: "100%",
          height: "100%",
          fontSize: "1rem",
        }}
        onChange={handleTextAreaChanged}
        value={text} />
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
      
    </Container>
  );
}

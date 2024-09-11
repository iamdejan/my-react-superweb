import { Button, Container, TextareaAutosize, Typography } from "@mui/material";
import { JSX } from "react";
import useJSONSorter from "../hooks/useJSONSorter";

export default function JSONSorter(): JSX.Element {
  const { text, handleTextAreaChanged, handleSortButtonClicked } = useJSONSorter();

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
        margin: 2
      }}>
        <TextareaAutosize minRows={50} cols={190} value={text} onChange={handleTextAreaChanged} />
      </Container>
      <Container
        sx={{
          maxWidth: "30vw",
          marginX: "auto"
        }}
      >
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSortButtonClicked}
          type="button"
        >
          Sort
        </Button>
      </Container>
      
    </Container>
  );
}

import { JSX } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function Counter(): JSX.Element {
  const [count, setCount] = useState(1);
  const hasClickedButton = useRef(false);

  function onClick(): void {
    setCount((count) => count+1);
    hasClickedButton.current = true;
  }

  useEffect(() => {
    console.log(`Has clicked increment button? ${hasClickedButton.current.toString()}`);
  });

  useEffect(() => {
    if(count % 15 === 0) {
      console.log(`Current count ${count.toString()} is FizzBuzz.`);
    } else if(count % 5 === 0) {
      console.log(`Current count ${count.toString()} is Buzz.`);
    } else if(count % 3 === 0) {
      console.log(`Current count ${count.toString()} is Fizz.`);
    } else {
      console.log(`Current count: ${count.toString()}`);
    }
  }, [count]);

  return (
    <Container sx={{
      backgroundColor: "rgb(255,255,255)",
      background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(220,255,254,1) 100%)",
      minHeight:"100vh",
      minWidth:"100%",
      margin:"0",
      padding:"0",
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>Counter Page</Typography>
      <Grid container maxWidth="100%" spacing={0} direction="column" alignItems="center">
        <Grid item marginBottom={2}>
          <Button variant="contained" onClick={onClick}>
            count is {count}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => setCount(1)}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

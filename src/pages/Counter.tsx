import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function Counter(): JSX.Element {
  const [count, setCount] = useState(1);
  const hasClickedButton = useRef(false);

  function onClick(): void {
    setCount((count) => count+1);
    hasClickedButton.current = true;
  }

  useEffect(() => {
    console.log(`Has clicked increment button? ${hasClickedButton.current}`);
  });

  useEffect(() => {
    if(count % 15 === 0) {
      console.log(`Current count ${count} is FizzBuzz.`);
    } else if(count % 5 === 0) {
      console.log(`Current count ${count} is Buzz.`);
    } else if(count % 3 === 0) {
      console.log(`Current count ${count} is Fizz.`);
    } else {
      console.log(`Current count: ${count}`);
    }
  }, [count]);

  return (
    <>
      <Typography variant="h3" align="center" marginBottom={3}>Counter Page</Typography>
      <Grid container maxWidth="xl" spacing={0} direction="column" alignItems="center">
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
    </>
  );
}

import { JSX } from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
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
      backgroundColor: "rgba(230,230,230,1)",
      background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(220,255,254,1) 100%)",
      minHeight:"100vh",
      minWidth:"100vw",
      margin:"0",
      padding:"0",
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>Counter</Typography>
      <Stack gap={2} alignItems="center">
        <Button variant="contained" onClick={onClick}>
          count is {count}
        </Button>
        <Button variant="outlined" onClick={() => setCount(1)}>
          Reset
        </Button>
      </Stack>
    </Container>
  );
}

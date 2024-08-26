import { Button } from "@mui/material";
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
      <h1>Counter Page</h1>
      <div className="card">
        <Button variant="outlined" onClick={onClick}>
          count is {count}
        </Button>
        <p>
          <Button variant="outlined" onClick={() => setCount(1)}>
            Reset
          </Button>
        </p>
      </div>
    </>
  );
}

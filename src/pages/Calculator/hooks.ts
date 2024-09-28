import { useState } from "react";

export const layout = [
  ["7", "8", "9", "(", ")"],
  ["4", "5", "6", "*", "/"],
  ["1", "2", "3", "+", "-"],
  ["0", "000", ".", "=", "C"],
];
export const validCharacterSet = new Set<string>(layout.flat());

type CalculatorHookOutput = {
  display: string;
  isError: boolean;
  handleButtonClicked: (value: string) => void;
};

export default function useCalculator(): CalculatorHookOutput {
  const [display, setDisplay] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  function calculate(): void {
    for(const c of display) {
      if(!validCharacterSet.has(c)) {
        setDisplay("Invalid input");
        setIsError(true);
        return;
      }
    }

    try {
      const result: unknown = eval(display);
      setDisplay(result as string);
    } catch(error: unknown) {
      setDisplay(`Error: ${error as string}`);
      setIsError(true);
    }
  }

  function handleButtonClicked(value: string): void {
    switch(value) {
    case "C": {
      setDisplay("");
      break;
    }
    case "=": {
      calculate();
      break;
    }
    default: {
      if(isError) {
        setIsError(false);
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
      break;
    }
    }
  }

  return {
    display,
    isError,
    handleButtonClicked,
  };
}

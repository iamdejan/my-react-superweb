import { useState } from "react";

type BMICalculatorHookOutput = {
  result: number,
  setResult: React.Dispatch<React.SetStateAction<number>>,

  resultCategory: string,
  setResultCategory: React.Dispatch<React.SetStateAction<string>>,

  resultOpen: boolean,
  setResultOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export default function useBMICalculator(): BMICalculatorHookOutput {
  const [result, setResult] = useState<number>(0);
  const [resultCategory, setResultCategory] = useState<string>("");
  const [resultOpen, setResultOpen] = useState<boolean>(false);

  return {
    result,
    setResult,
    resultCategory,
    setResultCategory,
    resultOpen,
    setResultOpen
  };
}

import { useEffect, useState } from "react";

const precision: number = 8;

export enum DistanceUnit {
  Kilometer = "KILOMETER",
  Mile = "MILE",
  NauticalMile = "NAUTICAL_MILE"
}

type DistanceCalculatorHookOutput = {
  kilometerInput: string;
  setKilometerInput: React.Dispatch<React.SetStateAction<string>>;
  
  mileInput: string;
  setMileInput: React.Dispatch<React.SetStateAction<string>>;

  nauticalMileInput: string;
  setNauticalMileInput: React.Dispatch<React.SetStateAction<string>>;

  selection: DistanceUnit;
  setSelection: React.Dispatch<React.SetStateAction<DistanceUnit>>;
}

function handleKilometer(
  kilometerInput: string,
  setMileInput: React.Dispatch<React.SetStateAction<string>>,
  setNauticalMileInput: React.Dispatch<React.SetStateAction<string>>,
): void {
  if(kilometerInput === "") {
    setMileInput("");
    setNauticalMileInput("");
    return;
  }

  const parsedNumber = Number.parseFloat(kilometerInput);
  setMileInput((0.62 * parsedNumber).toPrecision(precision));
  setNauticalMileInput((0.539957 * parsedNumber).toPrecision(precision));
}

function handleMile(
  mileInput: string,
  setKilometerInput: React.Dispatch<React.SetStateAction<string>>,
  setNauticalMileInput: React.Dispatch<React.SetStateAction<string>>,
): void {
  if(mileInput === "") {
    setKilometerInput("");
    setNauticalMileInput("");
    return;
  }

  const parsedNumber = Number.parseFloat(mileInput);
  setKilometerInput((1.609344 * parsedNumber).toPrecision(precision));
  setNauticalMileInput((0.868976242 * parsedNumber).toPrecision(precision));
}

function handleNauticalMile(
  nauticalMileInput: string,
  setKilometerInput: React.Dispatch<React.SetStateAction<string>>,
  setMileInput: React.Dispatch<React.SetStateAction<string>>,
): void {
  if(nauticalMileInput === "") {
    setKilometerInput("");
    setMileInput("");
    return;
  }

  const parsedNumber = Number.parseFloat(nauticalMileInput);
  setKilometerInput((1.852 * parsedNumber).toPrecision(precision));
  setMileInput((1.15077945 * parsedNumber).toPrecision(precision));
}

export function useDistanceCalculator(): DistanceCalculatorHookOutput {
  const [kilometerInput, setKilometerInput] = useState<string>("");
  const [mileInput, setMileInput] = useState<string>("");
  const [nauticalMileInput, setNauticalMileInput] = useState<string>("");
  const [selection, setSelection] = useState<DistanceUnit>(DistanceUnit.Kilometer);

  useEffect(() => {
    switch(selection) {
    case DistanceUnit.Kilometer: {
      handleKilometer(kilometerInput, setMileInput, setNauticalMileInput);
      break;
    }
    case DistanceUnit.Mile: {
      handleMile(mileInput, setKilometerInput, setNauticalMileInput);
      break;
    }
    case DistanceUnit.NauticalMile: {
      handleNauticalMile(nauticalMileInput, setKilometerInput, setMileInput);
      break;
    }
    }
  }, [selection, kilometerInput, mileInput, nauticalMileInput]);

  return {
    kilometerInput,
    setKilometerInput,
    mileInput,
    setMileInput,
    nauticalMileInput,
    setNauticalMileInput,
    selection,
    setSelection
  };
}

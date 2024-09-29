import { useCallback, useState } from "react";
import { DistanceUnit } from "../../enums/DistanceUnit";
import { isStateChanged, usePrevious } from "../../utils/hooks";

const digits: number = 4;

type DistanceCalculatorHookOutput = {
  kilometerInput: string;
  setKilometerInput: React.Dispatch<React.SetStateAction<string>>;

  mileInput: string;
  setMileInput: React.Dispatch<React.SetStateAction<string>>;

  nauticalMileInput: string;
  setNauticalMileInput: React.Dispatch<React.SetStateAction<string>>;

  selection: DistanceUnit;

  onUnitChanged: (event: React.ChangeEvent<HTMLInputElement>) => void
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
  if(!Number.isNaN(parsedNumber)) {
    setMileInput((0.62 * parsedNumber).toFixed(digits));
    setNauticalMileInput((0.539957 * parsedNumber).toFixed(digits));
  }
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
  if(!Number.isNaN(parsedNumber)) {
    setKilometerInput((1.609344 * parsedNumber).toFixed(digits));
    setNauticalMileInput((0.868976242 * parsedNumber).toFixed(digits));
  }
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
  if(!Number.isNaN(parsedNumber)) {
    setKilometerInput((1.852 * parsedNumber).toFixed(digits));
    setMileInput((1.15077945 * parsedNumber).toFixed(digits));
  }
}

export function useDistanceCalculator(): DistanceCalculatorHookOutput {
  const [kilometerInput, setKilometerInput] = useState<string>("");
  const {previous: prevKilometerInput, updatePrevious: updatePrevKilometerInput} = usePrevious<string>(kilometerInput);

  const [mileInput, setMileInput] = useState<string>("");
  const {previous: prevMileInput, updatePrevious: updatePrevMileInput} = usePrevious<string>(mileInput);

  const [nauticalMileInput, setNauticalMileInput] = useState<string>("");
  const {previous: prevNauticalMileInput, updatePrevious: updatePrevNauticalMileInput} = usePrevious<string>(nauticalMileInput);

  const [selection, setSelection] = useState<DistanceUnit>(DistanceUnit.Kilometer);
  const {previous: prevSelection, updatePrevious: updatePrevSelection} = usePrevious<DistanceUnit>(selection);

  const shouldRetrigger: () => boolean = useCallback<() => boolean>(() => {
    return isStateChanged(prevKilometerInput, kilometerInput) ||
      isStateChanged(prevMileInput, mileInput) ||
      isStateChanged(prevNauticalMileInput, nauticalMileInput) ||
      isStateChanged(prevSelection, selection);
  }, [
    prevKilometerInput,
    kilometerInput,
    prevMileInput,
    mileInput,
    prevNauticalMileInput,
    nauticalMileInput,
    prevSelection,
    selection,
  ]);

  if(shouldRetrigger()) {
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
    updatePrevSelection();
    updatePrevKilometerInput();
    updatePrevMileInput();
    updatePrevNauticalMileInput();
  }

  function onUnitChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    const distanceUnit = event.target.value as DistanceUnit;
    setSelection(distanceUnit);

    // reset all fields to prevent infinite render bug
    setKilometerInput("");
    setMileInput("");
    setNauticalMileInput("");
  }

  return {
    kilometerInput,
    setKilometerInput,
    mileInput,
    setMileInput,
    nauticalMileInput,
    setNauticalMileInput,
    selection,
    onUnitChanged
  };
}

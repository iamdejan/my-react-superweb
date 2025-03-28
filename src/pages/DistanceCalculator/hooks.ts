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

  onUnitChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function useDistanceCalculator(): DistanceCalculatorHookOutput {
  const [kilometerInput, setKilometerInput] = useState<string>("");
  const {
    previous: prevKilometerInput,
    updatePrevious: updatePrevKilometerInput,
  } = usePrevious<string>(kilometerInput);

  const [mileInput, setMileInput] = useState<string>("");
  const { previous: prevMileInput, updatePrevious: updatePrevMileInput } =
    usePrevious<string>(mileInput);

  const [nauticalMileInput, setNauticalMileInput] = useState<string>("");
  const {
    previous: prevNauticalMileInput,
    updatePrevious: updatePrevNauticalMileInput,
  } = usePrevious<string>(nauticalMileInput);

  const [selection, setSelection] = useState<DistanceUnit>(
    DistanceUnit.Kilometer,
  );

  const handleKilometer: () => void = useCallback<() => void>(() => {
    if (kilometerInput === "") {
      setMileInput("");
      setNauticalMileInput("");
      return;
    }

    const parsedNumber = Number.parseFloat(kilometerInput);
    if (!Number.isNaN(parsedNumber)) {
      setMileInput((0.62 * parsedNumber).toFixed(digits));
      setNauticalMileInput((0.539957 * parsedNumber).toFixed(digits));
    }
  }, [kilometerInput]);

  const handleMile: () => void = useCallback<() => void>(() => {
    if (mileInput === "") {
      setKilometerInput("");
      setNauticalMileInput("");
      return;
    }

    const parsedNumber = Number.parseFloat(mileInput);
    if (!Number.isNaN(parsedNumber)) {
      setKilometerInput((1.609344 * parsedNumber).toFixed(digits));
      setNauticalMileInput((0.868976242 * parsedNumber).toFixed(digits));
    }
  }, [mileInput]);

  const handleNauticalMile: () => void = useCallback<() => void>(() => {
    if (nauticalMileInput === "") {
      setKilometerInput("");
      setMileInput("");
      return;
    }

    const parsedNumber = Number.parseFloat(nauticalMileInput);
    if (!Number.isNaN(parsedNumber)) {
      setKilometerInput((1.852 * parsedNumber).toFixed(digits));
      setMileInput((1.15077945 * parsedNumber).toFixed(digits));
    }
  }, [nauticalMileInput]);

  if (
    isStateChanged(kilometerInput, prevKilometerInput) &&
    selection === DistanceUnit.Kilometer
  ) {
    handleKilometer();
    updatePrevKilometerInput();
  }

  if (
    isStateChanged(mileInput, prevMileInput) &&
    selection === DistanceUnit.Mile
  ) {
    handleMile();
    updatePrevMileInput();
  }

  if (
    isStateChanged(nauticalMileInput, prevNauticalMileInput) &&
    selection === DistanceUnit.NauticalMile
  ) {
    handleNauticalMile();
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
    onUnitChanged,
  };
}

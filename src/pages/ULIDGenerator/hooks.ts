import { useMemo, useState } from "react";
import { monotonicFactory } from "ulidx";

export const maxULIDCount = 30;
const ulid = monotonicFactory();

type ULIDGeneratorHookOutput = {
  count: number;
  ulidList: string[];

  handleScaleUpdate: (_e: Event, value: number | number[]) => void;
  handleTextFieldUpdate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  refreshSeed: () => void;
};

export default function useULIDGenerator(): ULIDGeneratorHookOutput {
  const [seed, setSeed] = useState<number>(new Date().getTime());
  const [count, setCount] = useState<number>(0);

  const ulidList: string[] = useMemo<string[]>(() => {
    const generatedULIDs: string[] = [];
    for (let i = 1; i <= count; i++) {
      const generatedULID = ulid(seed);
      generatedULIDs.push(generatedULID);
    }
    return generatedULIDs;
  }, [seed, count]);

  function handleScaleUpdate(_e: Event, value: number | number[]): void {
    setCount(value as number);
  }

  function handleTextFieldUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    if (event.target.value === "") {
      setCount(0);
      return;
    }
    const parsedInput = Number.parseInt(event.target.value);
    setCount(Math.min(parsedInput, maxULIDCount));
  }

  function refreshSeed(): void {
    setSeed(new Date().getTime());
  }

  return {
    count,
    ulidList,
    handleScaleUpdate,
    handleTextFieldUpdate,
    refreshSeed,
  };
}

import { useCallback, useState } from "react";
import { monotonicFactory } from "ulidx";
import { isStateChanged, usePrevious } from "../../utils/hooks";

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
  const { previous: prevSeed, updatePrevious: updatePrevSeed } = usePrevious<number>(seed);

  const [count, setCount] = useState<number>(0);
  const { previous: prevCount, updatePrevious: updatePrevCount} = usePrevious<number>(count);

  // generated ULID list
  const [ulidList, setULIDList] = useState<string[]>([]);

  const shouldRetrigger: () => boolean = useCallback<() => boolean>(() => {
    return isStateChanged(prevSeed, seed) ||
      isStateChanged(prevCount, count);
  }, [prevSeed, seed, prevCount, count]);

  if(shouldRetrigger()) {
    const generatedULIDs: string[] = [];
    for(let i = 1; i <= count; i++) {
      const generatedULID = ulid(seed);
      generatedULIDs.push(generatedULID);
    }
    setULIDList(generatedULIDs);

    updatePrevSeed();
    updatePrevCount();
  }

  function handleScaleUpdate(_e: Event, value: number | number[]): void {
    setCount(value as number);
  }

  function handleTextFieldUpdate(event: React.ChangeEvent<HTMLInputElement>): void {
    if(event.target.value === "") {
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
    refreshSeed
  };
}

import { useEffect, useState } from "react";

export const maxUUIDCount = 30;

type UUIDGeneratorHookOutput = {
  uuid: string;
  count: number;
  uuidList: string[];

  handleScaleUpdate: (event: Event, value: number | number[]) => void;
  handleTextFieldUpdate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerateButtonClick: () => void;
};

export default function useUUIDGenerator(): UUIDGeneratorHookOutput {
  const [uuid, setUUID] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [uuidList, setUUIDList] = useState<string[]>([]);

  useEffect(() => {
    setUUID(crypto.randomUUID());
  }, []);

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
    setCount(Math.min(parsedInput, maxUUIDCount));
  }

  function onGenerateButtonClick(): void {
    const generatedUUIDs: string[] = [];
    for (let i = 1; i <= count; i++) {
      generatedUUIDs.push(crypto.randomUUID());
    }
    setUUIDList(generatedUUIDs);
  }

  return {
    uuid,
    count,
    uuidList,
    handleScaleUpdate,
    handleTextFieldUpdate,
    onGenerateButtonClick,
  };
}

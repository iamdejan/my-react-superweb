import stringify from "json-stable-stringify";
import { useState } from "react";

type JSONSorterHookOutput = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;

  sortArrays: boolean;

  handleTextAreaChanged: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSortButtonClicked: () => Promise<void>;
  handleSortArraysSwitchChanged: () => void;
};

export default function useJSONSorter(): JSONSorterHookOutput {
  const [text, setText] = useState<string>("");
  const [sortArrays, setSortArrays] = useState<boolean>(false);

  function handleTextAreaChanged(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setText(e.target.value);
  }

  async function handleSortButtonClicked(): Promise<void> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const parsedData = JSON.parse(text);

      if(sortArrays) {
        const sortKeysRecursive = (await import("sort-keys-recursive")).default;
        const sortedData = sortKeysRecursive(parsedData) as unknown;
        setText(stringify(sortedData, {space: 4}));
      } else {
        setText(stringify(parsedData, {space: 4}));
      }
    } catch(e) {
      const errorMessage: string = e as string;
      setText("Invalid JSON: "+errorMessage);
    }
  }

  function handleSortArraysSwitchChanged(): void {
    setSortArrays(!sortArrays);
  }

  return {
    text,
    setText,
    sortArrays,
    handleTextAreaChanged,
    handleSortButtonClicked,
    handleSortArraysSwitchChanged: handleSortArraysSwitchChanged
  };
}

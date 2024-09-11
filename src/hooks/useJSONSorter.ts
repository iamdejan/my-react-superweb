import stringify from "json-stable-stringify";
import { useState } from "react";
import sortKeysRecursive from "sort-keys-recursive";

type JSONSorterHookOutput = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;

  handleTextAreaChanged: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSortButtonClicked: () => void;
};

export default function useJSONSorter(): JSONSorterHookOutput {
  const [text, setText] = useState<string>("");

  function handleTextAreaChanged(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setText(e.target.value);
  }

  function handleSortButtonClicked(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedData = JSON.parse(text);

    const sortedData = sortKeysRecursive(parsedData) as unknown;
    setText(stringify(sortedData, {space: "4"}));
  }

  return {
    text,
    setText,
    handleTextAreaChanged,
    handleSortButtonClicked,
  };
}

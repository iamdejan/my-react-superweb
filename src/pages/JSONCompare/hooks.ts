import { Differ, DiffResult } from "json-diff-kit";
import { useMemo, useState } from "react";

type JSONCompareHookOutput = {
  before: string;
  setBefore: React.Dispatch<React.SetStateAction<string>>;
  after: string;
  setAfter: React.Dispatch<React.SetStateAction<string>>;
  keepOrderInArrays: boolean;
  hideUnchangedLines: boolean;
  diffResult: readonly [DiffResult[], DiffResult[]];
  handleKeepOrderChange: () => void;
  handleHideUnchangedLinesChange: () => void;
  compareJSON: () => void;
  resetDiffResult: () => void;
};

const emptyDiffResult: readonly [DiffResult[], DiffResult[]] = [[], []];

export default function useJSONCompare(): JSONCompareHookOutput {
  const [before, setBefore] = useState<string>(
    '{"a":"b","c":0.2,"numbers":[4,3,2]}',
  );
  const [after, setAfter] = useState<string>(
    '{"c": 0.2, "b": "a","numbers":[1,2,3]}',
  );

  const [keepOrderInArrays, setKeepOrderInArrays] = useState<boolean>(false);
  const [hideUnchangedLines, setHideUnchangedLines] = useState<boolean>(false);

  const [diffResult, setDiffResult] =
    useState<readonly [DiffResult[], DiffResult[]]>(emptyDiffResult);

  const differ: Differ = useMemo<Differ>(() => {
    return new Differ({
      detectCircular: true,
      showModifications: true,
      arrayDiffMethod: keepOrderInArrays ? "lcs" : "unorder-lcs",
      recursiveEqual: true,
    });
  }, [keepOrderInArrays]);

  function handleKeepOrderChange(): void {
    setKeepOrderInArrays(!keepOrderInArrays);
    resetDiffResult();
  }

  function compareJSON(): void {
    if (!before || !after) {
      setDiffResult(emptyDiffResult);
      return;
    }

    const beforeObject = JSON.parse(before) as unknown;
    const afterObject = JSON.parse(after) as unknown;

    setDiffResult(differ.diff(beforeObject, afterObject));
  }

  function resetDiffResult(): void {
    setDiffResult(emptyDiffResult);
  }

  function handleHideUnchangedLinesChange(): void {
    setHideUnchangedLines(!hideUnchangedLines);
  }

  return {
    before,
    setBefore,
    after,
    setAfter,
    keepOrderInArrays,
    diffResult,
    handleKeepOrderChange,
    hideUnchangedLines,
    handleHideUnchangedLinesChange,
    compareJSON,
    resetDiffResult,
  };
}

import { useCallback, useState } from "react";
import { isStateChanged } from "../../utils/hooks";

export const maxPasswordLength = 30;

const lowerCaseAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("a".charCodeAt(0) + i)
);

const upperCaseAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("A".charCodeAt(0) + i)
);

const numberCharacters = Array.from({ length: 10 }, (_, i) =>
  String.fromCharCode("0".charCodeAt(0) + i)
);

const symbolCharacters = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]",
  "{", "}", "|", ";", ":", "'", "\"", "<", ">", ",", ".", "?", "/", "~", "`"
];

type PasswordGeneratorHookOutput = {
  passwordLength: number,
  generatedPassword: string,

  useLowerCase: boolean,
  useUpperCase: boolean,
  useNumbers: boolean,
  useSymbols: boolean,

  handleScaleUpdate: (_e: Event, value: number | number[]) => void,
  handleTextFieldUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleLowerCaseUpdate: () => void,
  handleUpperCaseUpdate: () => void,
  handleNumbersUpdate: () => void,
  handleSymbolsUpdate: () => void,
};

export default function usePasswordGenerator(): PasswordGeneratorHookOutput {
  // password generator configurations
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [prevPasswordLength, setPrevPasswordLength] = useState<number>(0);

  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  // password character's configurations
  const [useLowerCase, setUseLowerCase] = useState<boolean>(true);
  const [prevUseLowerCase, setPrevUseLowerCase] = useState<boolean>(true);

  const [useUpperCase, setUseUpperCase] = useState<boolean>(true);
  const [prevUseUpperCase, setPrevUseUpperCase] = useState<boolean>(true);

  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [prevUseNumbers, setPrevUseNumbers] = useState<boolean>(true);

  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [prevUseSymbols, setPrevUseSymbols] = useState<boolean>(true);

  const retriggerIfChanged: () => boolean = useCallback<() => boolean>(() => {
    return isStateChanged(prevUseLowerCase, useLowerCase) ||
      isStateChanged(prevUseUpperCase, useUpperCase) ||
      isStateChanged(prevUseNumbers, useNumbers) ||
      isStateChanged(prevUseSymbols, useSymbols) ||
      isStateChanged(prevPasswordLength, passwordLength);
  }, [
    prevUseLowerCase,
    prevUseNumbers,
    prevUseSymbols,
    prevUseUpperCase,
    useLowerCase,
    useNumbers,
    useSymbols,
    useUpperCase,
    prevPasswordLength,
    passwordLength
  ]);

  if(retriggerIfChanged()) {
    let characters: string[] = [];
    if (useLowerCase) {
      characters = characters.concat(lowerCaseAlphabet);
    }
    if (useUpperCase) {
      characters = characters.concat(upperCaseAlphabet);
    }
    if (useNumbers) {
      characters = characters.concat(numberCharacters);
    }
    if (useSymbols) {
      characters = characters.concat(symbolCharacters);
    }

    if(passwordLength === 0 || characters.length === 0) {
      setGeneratedPassword("");
    } else {
      let pwd = "";
      for(let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.round(Math.random() * (characters.length - 1));
        const randomChar = characters[randomIndex];
        pwd += randomChar;
      }
  
      setGeneratedPassword(pwd);
    }

    setPrevUseLowerCase(useLowerCase);
    setPrevUseUpperCase(useUpperCase);
    setPrevUseNumbers(useNumbers);
    setPrevUseSymbols(useSymbols);
    setPrevPasswordLength(passwordLength);
  };

  function handleScaleUpdate(_e: Event, value: number | number[]): void {
    setPasswordLength(value as number);
  }

  function handleTextFieldUpdate(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = Number.parseInt(e.target.value);
    if (Number.isNaN(value)) {
      setPasswordLength(0);
    } else {
      setPasswordLength(Math.min(value, maxPasswordLength));
    }
  }

  function handleLowerCaseUpdate(): void {
    setUseLowerCase(!useLowerCase);
  }

  function handleUpperCaseUpdate(): void {
    setUseUpperCase(!useUpperCase);
  }

  function handleNumbersUpdate(): void {
    setUseNumbers(!useNumbers);
  }

  function handleSymbolsUpdate(): void {
    setUseSymbols(!useSymbols);
  }

  return {
    passwordLength,
    generatedPassword,
    useLowerCase,
    useUpperCase,
    useNumbers,
    useSymbols,
    handleScaleUpdate,
    handleTextFieldUpdate,
    handleLowerCaseUpdate,
    handleUpperCaseUpdate,
    handleNumbersUpdate,
    handleSymbolsUpdate,
  };
}

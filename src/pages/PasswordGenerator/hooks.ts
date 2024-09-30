import { useMemo, useState } from "react";

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

  withLowerCase: boolean,
  withUpperCase: boolean,
  withNumbers: boolean,
  withSymbols: boolean,

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

  // password character's configurations
  const [withLowerCase, setWithLowerCase] = useState<boolean>(true);
  const [withUpperCase, setWithUpperCase] = useState<boolean>(true);
  const [withNumbers, setWithNumbers] = useState<boolean>(true);
  const [withSymbols, setWithSymbols] = useState<boolean>(true);

  const generatedPassword: string = useMemo<string>(() => {
    let characters: string[] = [];
    if (withLowerCase) {
      characters = characters.concat(lowerCaseAlphabet);
    }
    if (withUpperCase) {
      characters = characters.concat(upperCaseAlphabet);
    }
    if (withNumbers) {
      characters = characters.concat(numberCharacters);
    }
    if (withSymbols) {
      characters = characters.concat(symbolCharacters);
    }

    if(passwordLength === 0 || characters.length === 0) {
      return "";
    }

    let pwd = "";
    for(let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.round(Math.random() * (characters.length - 1));
      const randomChar = characters[randomIndex];
      pwd += randomChar;
    }

    return pwd;
  }, [passwordLength, withLowerCase, withNumbers, withSymbols, withUpperCase]);

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
    setWithLowerCase(!withLowerCase);
  }

  function handleUpperCaseUpdate(): void {
    setWithUpperCase(!withUpperCase);
  }

  function handleNumbersUpdate(): void {
    setWithNumbers(!withNumbers);
  }

  function handleSymbolsUpdate(): void {
    setWithSymbols(!withSymbols);
  }

  return {
    passwordLength,
    generatedPassword,
    withLowerCase,
    withUpperCase,
    withNumbers,
    withSymbols,
    handleScaleUpdate,
    handleTextFieldUpdate,
    handleLowerCaseUpdate,
    handleUpperCaseUpdate,
    handleNumbersUpdate,
    handleSymbolsUpdate,
  };
}

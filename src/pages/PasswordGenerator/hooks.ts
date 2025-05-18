import { useState } from "react";

export const maxPasswordLength = 30;

const lowerCaseAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("a".charCodeAt(0) + i),
);

const upperCaseAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("A".charCodeAt(0) + i),
);

const numberCharacters = Array.from({ length: 10 }, (_, i) =>
  String.fromCharCode("0".charCodeAt(0) + i),
);

const symbolCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  "'",
  '"',
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
  "~",
  "`",
];

type PasswordGeneratorHookOutput = {
  passwordLength: number;
  withLowerCase: boolean;
  withUpperCase: boolean;
  withNumbers: boolean;
  withSymbols: boolean;

  password: string;

  handleScaleUpdate: (_e: Event, value: number | number[]) => void;
  handleTextFieldUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLowerCaseUpdate: () => void;
  handleUpperCaseUpdate: () => void;
  handleNumbersUpdate: () => void;
  handleSymbolsUpdate: () => void;
  regeneratePassword: () => void;
};

export default function usePasswordGenerator(): PasswordGeneratorHookOutput {
  // password generator configurations
  const [passwordLength, setPasswordLength] = useState<number>(0);

  // password character's configurations
  const [withLowerCase, setWithLowerCase] = useState<boolean>(true);
  const [withUpperCase, setWithUpperCase] = useState<boolean>(true);
  const [withNumbers, setWithNumbers] = useState<boolean>(true);
  const [withSymbols, setWithSymbols] = useState<boolean>(true);

  // result
  const [password, setPassword] = useState<string>("");

  function generatePassword(): string {
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

    if (passwordLength === 0 || characters.length === 0) {
      return "";
    }

    let pwd = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.round(Math.random() * (characters.length - 1));
      const randomChar = characters[randomIndex];
      pwd += randomChar;
    }

    return pwd;
  }

  function handleScaleUpdate(_e: Event, value: number | number[]): void {
    setPasswordLength(value as number);
    setPassword(generatePassword());
  }

  function handleTextFieldUpdate(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = Number.parseInt(e.target.value);
    if (Number.isNaN(value)) {
      setPasswordLength(0);
    } else {
      setPasswordLength(Math.min(value, maxPasswordLength));
      setPassword(generatePassword());
    }
  }

  function handleLowerCaseUpdate(): void {
    setWithLowerCase(!withLowerCase);
    setPassword(generatePassword());
  }

  function handleUpperCaseUpdate(): void {
    setWithUpperCase(!withUpperCase);
    setPassword(generatePassword());
  }

  function handleNumbersUpdate(): void {
    setWithNumbers(!withNumbers);
    setPassword(generatePassword());
  }

  function handleSymbolsUpdate(): void {
    setWithSymbols(!withSymbols);
    setPassword(generatePassword());
  }

  function regeneratePassword(): void {
    setPassword(generatePassword());
  }

  return {
    passwordLength,
    withLowerCase,
    withUpperCase,
    withNumbers,
    withSymbols,
    password,
    handleScaleUpdate,
    handleTextFieldUpdate,
    handleLowerCaseUpdate,
    handleUpperCaseUpdate,
    handleNumbersUpdate,
    handleSymbolsUpdate,
    regeneratePassword,
  };
}

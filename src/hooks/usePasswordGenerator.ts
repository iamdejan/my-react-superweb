import { useEffect, useState } from "react";

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

  availableCharacters: string[],

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
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  // password character's configurations
  const [useLowerCase, setUseLowerCase] = useState<boolean>(true);
  const [useUpperCase, setUseUpperCase] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [availableCharacters, setAvailableCharacters] = useState<string[]>([]);

  useEffect(() => {
    let pwd = "";
    if(passwordLength === 0 || availableCharacters.length === 0) {
      setGeneratedPassword("");
      return;
    }

    for(let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.round(Math.random() * (availableCharacters.length - 1));
      const randomChar = availableCharacters[randomIndex];
      pwd += randomChar;
    }

    setGeneratedPassword(pwd);
  }, [passwordLength, availableCharacters]);

  useEffect(() => {
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
    setAvailableCharacters(characters);
  }, [useLowerCase, useUpperCase, useNumbers, useSymbols]);

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
    availableCharacters,
    handleScaleUpdate,
    handleTextFieldUpdate,
    handleLowerCaseUpdate,
    handleUpperCaseUpdate,
    handleNumbersUpdate,
    handleSymbolsUpdate,
  };
}

import { useEffect, useState } from "react";

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
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>,

  generatedPassword: string,
  setGeneratedPassword: React.Dispatch<React.SetStateAction<string>>,

  useLowerCase: boolean,
  setUseLowerCase: React.Dispatch<React.SetStateAction<boolean>>,

  useUpperCase: boolean,
  setUseUpperCase: React.Dispatch<React.SetStateAction<boolean>>,

  useNumbers: boolean,
  setUseNumbers: React.Dispatch<React.SetStateAction<boolean>>,

  useSymbols: boolean,
  setUseSymbols: React.Dispatch<React.SetStateAction<boolean>>,

  availableCharacters: string[],
  setAvailableCharacters: React.Dispatch<React.SetStateAction<string[]>>,
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

  return {
    passwordLength,
    setPasswordLength,
    generatedPassword,
    setGeneratedPassword,
    useLowerCase,
    setUseLowerCase,
    useUpperCase,
    setUseUpperCase,
    useNumbers,
    setUseNumbers,
    useSymbols,
    setUseSymbols,
    availableCharacters,
    setAvailableCharacters,
  };
}

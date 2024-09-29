import { useCallback, useState } from "react";
import { isStateChanged, usePrevious } from "../../utils/hooks";

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
  // generated password
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  // password generator configurations
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const { previous: prevPasswordLength, updatePrevious: updatePrevPasswordLength } = usePrevious<number>(passwordLength);

  // password character's configurations
  const [useLowerCase, setUseLowerCase] = useState<boolean>(true);
  const { previous: prevUseLowerCase, updatePrevious: updatePrevUseLowerCase } = usePrevious<boolean>(useLowerCase);

  const [useUpperCase, setUseUpperCase] = useState<boolean>(true);
  const { previous: prevUseUpperCase, updatePrevious: updatePrevUseUpperCase } = usePrevious<boolean>(useUpperCase);

  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const { previous: prevUseNumbers, updatePrevious: updatePrevUseNumbers } = usePrevious<boolean>(useNumbers);

  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const { previous: prevUseSymbols, updatePrevious: updatePrevUseSymbols } = usePrevious<boolean>(useSymbols);

  const shouldRetrigger: () => boolean = useCallback<() => boolean>(() => {
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

  if(shouldRetrigger()) {
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

    updatePrevUseLowerCase();
    updatePrevUseUpperCase();
    updatePrevUseNumbers();
    updatePrevUseSymbols();
    updatePrevPasswordLength();
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

import { Switch, useColorScheme } from "@mui/material";
import { JSX, useEffect } from "react";

export default function ThemeSwitch(): JSX.Element | null {
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    window
      .matchMedia(`(prefers-color-scheme: dark)`)
      .addEventListener("change", (ev: MediaQueryListEvent) => {
        const newColorScheme = ev.matches ? "dark" : "light";
        setMode(newColorScheme);
      });
  }, [mode, setMode]);

  if (!mode) {
    return null;
  }

  function handleThemeChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;
    if (checked) {
      setMode("light");
    } else {
      setMode("dark");
    }
  }

  const modeDisplay = mode.charAt(0).toUpperCase() + mode.substring(1);

  return (
    <>
      <Switch onChange={handleThemeChange} checked={mode === "light"} />{" "}
      {modeDisplay}
    </>
  );
}

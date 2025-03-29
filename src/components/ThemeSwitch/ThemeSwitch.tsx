import { Switch, useColorScheme } from "@mui/material";
import { JSX } from "react";

export default function ThemeSwitch(): JSX.Element | null {
  const { mode, setMode } = useColorScheme();
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

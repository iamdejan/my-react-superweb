import { createLazyFileRoute } from "@tanstack/react-router";
import BMICalculatorDetail from "../../../pages/BMICalculatorDetail";
import InvalidHeightError from "../../../pages/InvalidHeightError";

export const Route = createLazyFileRoute("/bmi-calculator/height/$height")({
  component: BMICalculatorDetail,
  errorComponent: InvalidHeightError,
});

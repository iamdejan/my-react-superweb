import { createLazyFileRoute } from "@tanstack/react-router";
import BMICalculatorDetail from "../../../pages/BMICalculator/detail";
import InvalidHeightError from "../../../pages/BMICalculator/error";

export const Route = createLazyFileRoute("/bmi-calculator/height/$height")({
  component: BMICalculatorDetail,
  errorComponent: InvalidHeightError
});

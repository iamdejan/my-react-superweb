import { createFileRoute } from "@tanstack/react-router";
import BMICalculatorDetail from "../../../pages/BMICalculator/detail";

export const Route = createFileRoute("/bmi-calculator/height/$height")({
  component: BMICalculatorDetail
});

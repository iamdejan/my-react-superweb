import { createLazyFileRoute } from "@tanstack/react-router";
import BMICalculatorIndex from "../../pages/BMICalculator";

export const Route = createLazyFileRoute("/bmi-calculator/")({
  component: BMICalculatorIndex
});

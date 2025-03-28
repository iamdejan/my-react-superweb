import { createLazyFileRoute } from "@tanstack/react-router";
import BMICalculatorIndex from "../../pages/BMICalculatorIndex";

export const Route = createLazyFileRoute("/bmi-calculator/")({
  component: BMICalculatorIndex,
});

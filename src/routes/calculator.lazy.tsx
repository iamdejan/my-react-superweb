import { createLazyFileRoute } from "@tanstack/react-router";
import Calculator from "../pages/Calculator";

export const Route = createLazyFileRoute("/calculator")({
  component: Calculator
});

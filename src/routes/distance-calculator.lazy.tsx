import { createLazyFileRoute } from "@tanstack/react-router";
import DistanceCalculator from "../pages/DistanceCalculator";

export const Route = createLazyFileRoute("/distance-calculator")({
  component: DistanceCalculator
});

import { createFileRoute } from "@tanstack/react-router";
import { HeightSchema } from "../../../schema/HeightSchema";

export const Route = createFileRoute("/bmi-calculator/height/$height")({
  loader: ({params: {height}}) => {
    return {
      height: HeightSchema.parse(height)
    };
  }
});

import { createFileRoute } from "@tanstack/react-router";
import { HeightSchema } from "../../../schema/HeightSchema";
import { lazyRouteOptions } from "../../../config/routes";

export const Route = createFileRoute("/bmi-calculator/height/$height")({
  loader: ({params: {height}}) => {
    return {
      height: HeightSchema.parse(height)
    };
  },
  ...lazyRouteOptions
});

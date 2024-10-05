import { createLazyFileRoute } from "@tanstack/react-router";
import Counter from "../pages/Counter";

export const Route = createLazyFileRoute("/counter")({
  component: Counter,
});

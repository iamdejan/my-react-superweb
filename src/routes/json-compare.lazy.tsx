import { createLazyFileRoute } from "@tanstack/react-router";
import JSONCompare from "../pages/JSONCompare";

export const Route = createLazyFileRoute("/json-compare")({
  component: JSONCompare,
});

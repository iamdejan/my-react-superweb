import { createLazyFileRoute } from "@tanstack/react-router";
import JSONSorter from "../pages/JSONSorter";

export const Route = createLazyFileRoute("/json-sorter")({
  component: JSONSorter,
});

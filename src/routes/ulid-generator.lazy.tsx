import { createLazyFileRoute } from "@tanstack/react-router";
import ULIDGenerator from "../pages/ULIDGenerator";

export const Route = createLazyFileRoute("/ulid-generator")({
  component: ULIDGenerator,
});

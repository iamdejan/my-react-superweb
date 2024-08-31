import { createLazyFileRoute } from "@tanstack/react-router";
import UUIDGenerator from "../pages/UUIDGenerator";

export const Route = createLazyFileRoute("/uuid-generator")({
  component: UUIDGenerator
});

import { createLazyFileRoute } from "@tanstack/react-router";
import PasswordGenerator from "../pages/PasswordGenerator";

export const Route = createLazyFileRoute("/password-generator")({
  component: PasswordGenerator
});

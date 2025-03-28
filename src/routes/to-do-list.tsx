import { createFileRoute } from "@tanstack/react-router";
import { lazyRouteOptions } from "../config/routes";

export const Route = createFileRoute("/to-do-list")({ ...lazyRouteOptions });

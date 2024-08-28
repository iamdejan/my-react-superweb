import { createLazyFileRoute } from "@tanstack/react-router";
import ToDoList from "../pages/ToDoList";

export const Route = createLazyFileRoute("/to-do-list")({
  component: ToDoList,
});

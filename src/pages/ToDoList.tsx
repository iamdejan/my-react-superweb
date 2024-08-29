import { Alert, AlertTitle, Container, Typography } from "@mui/material";
import { JSX } from "react";
import { useForm } from "react-hook-form";
import { TodoItem, TodoItemSchema } from "../schema/todo-item";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ToDoList(): JSX.Element {
  const { register, handleSubmit, formState: {errors} } = useForm<TodoItem>({
    resolver: zodResolver(TodoItemSchema),
  });

  function onSubmit(data: TodoItem): void {
    console.log(data);
  }

  return (
    <Container sx={{
      backgroundColor: "rgb(255,255,255)",
      background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(234,255,234,1) 100%)",
      minHeight:"100vh",
      minWidth:"100%",
      margin:"0",
      padding:"0",
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        To-Do List
      </Typography>
      <Alert severity="warning" variant="filled">
        <AlertTitle>Be Aware</AlertTitle>
        This to-do list stores the list of to-do activities locally.
        Currently, there's no plan to integrate this feature with database.
      </Alert>

      {/* recommended approach without editing `eslint.config.js`
      ref: https://github.com/orgs/react-hook-form/discussions/8622#discussioncomment-6305393 */}
      <form onSubmit={(event) => {
        event.preventDefault();
        void handleSubmit(onSubmit)(event);
      }}>
        <div>
          <input {...register("title")} type="text" placeholder="Title" />
          {errors.title && <span>{errors.title.message}</span>}
        </div>

        <div>
          <input {...register("description")} type="text" placeholder="Description" />
          {errors.description && <span>{errors.description.message}</span>}
        </div>

        <button type="submit">Add</button>
      </form>
    </Container>
  );
}

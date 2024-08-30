import { Alert, AlertTitle, Button, Checkbox, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { JSX } from "react";
import { useForm } from "react-hook-form";
import { TodoItem, TodoItemSchema } from "../schema/todo-item";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function ToDoList(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<TodoItem>({
    resolver: zodResolver(TodoItemSchema),
    mode: "all",
  });
  const [todoList, setTodoList] = useLocalStorage<TodoItem[]>("todoList", []);

  function onSubmit(data: TodoItem): void {
    setTodoList([...todoList, data]);
  }

  return (
    <Container sx={{
      backgroundColor: "rgb(255,255,255)",
      background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(234,255,234,1) 100%)",
      minHeight:"100vh",
      minWidth:"100%",
      margin:"0",
      paddingBottom:"5rem",
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        To-Do List
      </Typography>
      <Alert severity="warning" variant="filled">
        <AlertTitle>Be Aware</AlertTitle>
        This to-do list stores the list of to-do activities locally.
        Currently, there's no plan to integrate this feature with database.
      </Alert>

      <Typography variant="h6" align="center" marginTop={3}>
        To-do List
      </Typography>
      <TableContainer component={Paper} sx={{marginTop: 3}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Is completed?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoList.map((todoItem, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{todoItem.title}</TableCell>
                <TableCell>{todoItem.description}</TableCell>
                <TableCell><Checkbox checked={todoItem.completed} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* recommended approach without editing `eslint.config.js`
      ref: https://github.com/orgs/react-hook-form/discussions/8622#discussioncomment-6305393 */}
      <form onSubmit={(event) => {
        event.preventDefault();
        void handleSubmit(onSubmit)(event);
      }}>
        <Typography variant="h6" align="center" marginTop={3}>
          Form
        </Typography>

        <Stack marginY={4} gap={4}>
          <TextField {...register("title")} label="Title" error={!!errors.title} helperText={errors.title?.message} />
          <TextField {...register("description")} label="Description" error={!!errors.description} helperText={errors.description?.message} />
        </Stack>

        <Button type="submit" variant="contained">Add</Button>
      </form>
    </Container>
  );
}

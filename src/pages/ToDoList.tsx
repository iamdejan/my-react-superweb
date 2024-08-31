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

  function onCheckChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    const checked = event.target.checked;
    const index = Number.parseInt(event.target.name);
    todoList[index].completed = checked;
    setTodoList([...todoList]);
  }

  return (
    <Container sx={{
      backgroundColor: "rgba(230,230,230,1)",
      background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(234,255,234,1) 100%)",
      minHeight:"100vh",
      minWidth:"100%",
      margin:"0",
      paddingBottom:"5rem",
    }}>
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        To-Do List
      </Typography>
      <Alert severity="warning" variant="filled" sx={{marginX: "auto", maxWidth: "40%"}}>
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
        <Stack
          gap={4}
          marginTop={3}
          marginX="auto"
          padding={2}
          maxWidth="40%"
          elevation={2}
          component={Paper}
        >
          <Typography variant="h6" align="center">
            Form
          </Typography>
          <TextField {...register("title")} label="Title" error={!!errors.title} helperText={errors.title?.message} />
          <TextField {...register("description")} label="Description" error={!!errors.description} helperText={errors.description?.message} />
          <Button type="submit" variant="contained">Add</Button>
        </Stack>
      </form>

      <Typography variant="h6" align="center" marginTop={3}>
        To-do List
      </Typography>
      <TableContainer component={Paper} sx={{marginTop: 3, maxHeight: "60vh"}}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell width="22%">Title</TableCell>
              <TableCell width="70%">Description</TableCell>
              <TableCell width="8%">Is completed?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoList.map((todoItem, index) => (
              <TableRow key={index}>
                <TableCell>{todoItem.title}</TableCell>
                <TableCell>{todoItem.description}</TableCell>
                <TableCell><Checkbox name={index.toString()} checked={todoItem.completed} onChange={onCheckChanged} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

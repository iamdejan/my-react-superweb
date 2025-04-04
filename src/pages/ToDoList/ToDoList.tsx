import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { JSX } from "react";
import { useForm } from "react-hook-form";
import { ToDoItem, ToDoItemSchema } from "../../schema/ToDoItemSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDocumentTitle, useLocalStorage } from "@uidotdev/usehooks";

export default function ToDoList(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ToDoItem>({
    resolver: zodResolver(ToDoItemSchema),
    mode: "all",
  });
  const [todoList, setTodoList] = useLocalStorage<ToDoItem[]>("todoList", []);
  useDocumentTitle("To-Do List");

  function onSubmit(data: ToDoItem): void {
    setTodoList([...todoList, data]);
  }

  function onCheckChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    const checked = event.target.checked;
    const index = Number.parseInt(event.target.name);
    todoList[index].completed = checked;
    setTodoList([...todoList]);
  }

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: "rgba(230,230,230,1)",
        background:
          "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(234,255,234,1) 100%)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(17,17,17,1)",
          background:
            "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(23,22,23,1) 100%)",
        }),
        minHeight: "100vh",
        minWidth: "100%",
        margin: "0",
        paddingBottom: "5rem",
        borderRadius: "0",
      })}
    >
      <Typography variant="h4" align="center" paddingTop={2} paddingBottom={3}>
        To-Do List
      </Typography>
      <Alert
        severity="warning"
        variant="filled"
        sx={{
          marginX: "auto",
          maxWidth: {
            sm: "70%",
            md: "50%",
          },
        }}
      >
        <AlertTitle>Be Aware</AlertTitle>
        This to-do list stores the list of to-do activities locally. Currently,
        there's no plan to integrate this feature with any backend / cloud
        database.
      </Alert>

      {/* recommended approach without editing `eslint.config.js`
      ref: https://github.com/orgs/react-hook-form/discussions/8622#discussioncomment-6305393 */}
      <form
        onSubmit={(event: React.FormEvent<HTMLElement>) => {
          event.preventDefault();
          void handleSubmit(onSubmit)(event);
        }}
      >
        <Stack
          elevation={2}
          component={Paper}
          sx={{
            gap: 4,
            marginTop: 3,
            marginX: "auto",
            padding: 2,
            maxWidth: {
              sm: "70%",
              md: "50%",
            },
          }}
        >
          <Typography variant="h6" align="center">
            Form
          </Typography>
          <TextField
            {...register("title")}
            label="Title"
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            {...register("description")}
            label="Description"
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Stack>
      </form>

      <Typography variant="h6" align="center" marginTop={3}>
        To-do List
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: 3,
          maxHeight: "60vh",
          maxWidth: {
            md: "80%",
            lg: "70%",
          },
          marginX: "auto",
        }}
      >
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
                <TableCell>
                  {todoItem.completed ? (
                    <s>{todoItem.title}</s>
                  ) : (
                    todoItem.title
                  )}
                </TableCell>
                <TableCell>{todoItem.description}</TableCell>
                <TableCell>
                  <Checkbox
                    name={index.toString()}
                    checked={todoItem.completed}
                    onChange={onCheckChanged}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

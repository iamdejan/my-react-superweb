import {z} from "zod";

export const TodoItemSchema = z.object({
  id: z.string().default(() => crypto.randomUUID()),
  title: z.string().min(1),
  description: z.string().optional(),
  completed: z.boolean().default(false),
});

export type TodoItem = z.infer<typeof TodoItemSchema>;

import {z} from "zod";

export const MultiUUIDGenFormSchema = z.object({
  count: z.string().min(1).transform((val) => Number.parseInt(val)),
  // count: z.number().int().min(1)
});

export type MultiUUIDGenForm = z.infer<typeof MultiUUIDGenFormSchema>;

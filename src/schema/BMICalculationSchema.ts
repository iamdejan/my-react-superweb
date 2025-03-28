import { z } from "zod";

export const BMICalculationSchema = z.object({
  height: z
    .number()
    .or(z.string().min(1, { message: "Must be filled in" }))
    .pipe(z.coerce.number({ message: "Invalid number" })),
  weight: z
    .number()
    .or(z.string().min(1, { message: "Must be filled in" }))
    .pipe(z.coerce.number({ message: "Invalid number" })),
});

export type BMICalculation = z.infer<typeof BMICalculationSchema>;

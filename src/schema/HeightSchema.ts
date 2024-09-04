import { z } from "zod";

export const HeightSchema = z.string().
  min(3).
  endsWith("cm", {message: "Height should ends in cm"}).
  transform((val: string) => {
    const height = val.substring(0, val.length-2);
    return Number.parseInt(height);
  });

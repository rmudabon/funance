import { z } from "zod";

export const basicSchema = z.object({
  amount: z
    .union([
      z.string().transform((x) => x.replace(/[^0-9.-]+/g, "")),
      z.number(),
    ])
    .pipe(
      z.coerce
        .number()
        .multipleOf(0.01, "Up to 2 decimal places only.")
        .max(999999999)
    ),
  description: z.string({ message: "Required" }),
  expenseType: z.number(),
});

export type BasicForm = z.infer<typeof basicSchema>;

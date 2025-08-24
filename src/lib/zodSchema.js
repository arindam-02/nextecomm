import { z } from "zod";

export const zSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be no more than 100 characters" })
    .refine((val) => /[a-z]/.test(val), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Password must contain at least one number",
    })
    .refine((val) => /[^a-zA-Z0-9]/.test(val), {
      message: "Password must contain at least one special character",
    }),

  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
});

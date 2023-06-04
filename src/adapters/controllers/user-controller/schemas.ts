import { ZodSchema, z } from "zod";
import { SignUpBody } from "./types";

const SignUpSchema: ZodSchema<SignUpBody> = z.object({
  name: z.string().min(2).max(32),
  email: z.string().email(),
  password: z.string().min(8).max(16),
});

export { SignUpSchema };

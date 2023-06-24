import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

import {
  CreateBoardBody,
  SignInBody,
  SignUpBody,
} from "@/adapters/controllers";

const SignUpZodSchema: z.ZodSchema<SignUpBody> = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8).max(16),
});

const SignUpJsonSchema = zodToJsonSchema(SignUpZodSchema);

const SignInZodSchema: z.ZodSchema<SignInBody> = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
});

const SignInJsonSchema = zodToJsonSchema(SignInZodSchema);

const CreateBoardZodSchema: z.ZodSchema<CreateBoardBody> = z.object({
  name: z.string(),
  type: z.enum(["private", "public"]),
});

const CreateBoardJsonSchema = zodToJsonSchema(CreateBoardZodSchema);

const WsMessageZodSchema = z.object({
  id: z.string().uuid(),
  data: z.string(),
  operation: z.enum(["create", "delete", "update"]),
  save: z.boolean(),
});

export {
  CreateBoardJsonSchema,
  SignInJsonSchema,
  SignUpJsonSchema,
  WsMessageZodSchema
};

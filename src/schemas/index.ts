import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

import {
  BoardIdParam,
  CreateBoardBody,
  SignInBody,
  SignUpBody,
  UpdateBoardBody,
  WsMessage,
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
  type: z.enum(["private", "public", "team"]),
});

const CreateBoardJsonSchema = zodToJsonSchema(CreateBoardZodSchema);

const UpdateBoardZodSchema: z.ZodSchema<UpdateBoardBody> = z.object({
  name: z.string().optional(),
  type: z.enum(["private", "public", "team"]).optional(),
});

const UpdateBoardJsonSchema = zodToJsonSchema(UpdateBoardZodSchema);

const BoardIdZodSchema: z.ZodSchema<BoardIdParam> = z.object({
  boardId: z.string().uuid(),
});

const BoardIdJsonSchema = zodToJsonSchema(BoardIdZodSchema);

const WsMessageZodSchema: z.ZodSchema<WsMessage> = z.object({
  id: z.string().uuid(),
  data: z.string(),
  operation: z.enum(["create", "delete", "update"]),
  save: z.boolean(),
});

export {
  BoardIdJsonSchema,
  CreateBoardJsonSchema,
  SignInJsonSchema,
  SignUpJsonSchema,
  UpdateBoardJsonSchema,
  WsMessageZodSchema
};

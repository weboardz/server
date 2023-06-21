import { ZodSchema, z } from "zod";
import { CreateBoardBody } from "./types";

const CreateBoardSchema: ZodSchema<CreateBoardBody> = z.object({
  name: z.string().min(2).max(32),
  userId: z.string(),
});

export { CreateBoardSchema };

import { WsMessageZodSchema } from "@/schemas";
import { z } from "zod";

type WsMessage = z.infer<typeof WsMessageZodSchema>;

type UpdateBoardElementFunction = (message: WsMessage, boardId: string) => void;

export { UpdateBoardElementFunction, WsMessage };

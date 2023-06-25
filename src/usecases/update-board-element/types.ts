import { WsMessage } from "@/adapters/controllers";

type UpdateBoardElementFunction = (
  message: WsMessage,
  boardId: string
) => Promise<void>;

export { UpdateBoardElementFunction, WsMessage };

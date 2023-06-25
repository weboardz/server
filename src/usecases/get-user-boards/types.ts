import { IBoard } from "@/domain";

type GetUserBoardsFunction = (userId: string) => Promise<IBoard[]>;

export { GetUserBoardsFunction };

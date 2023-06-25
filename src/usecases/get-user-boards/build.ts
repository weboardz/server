import { IBoardRepository } from "@/adapters/repositories";
import { GetUserBoardsFunction } from "./types";

const buildGetUserBoards = (
  boardRepository: IBoardRepository
): GetUserBoardsFunction => {
  return async (userId) => {
    return boardRepository.findManyByUserId(userId);
  };
};

export { buildGetUserBoards };

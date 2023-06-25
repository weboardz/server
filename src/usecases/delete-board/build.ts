import { IBoardRepository } from "@/adapters/repositories";
import { invalidCredentialsError, notFoundError } from "@/errors";

import { DeleteBoardFunction } from "./types";

const buildDeleteBoard = (
  boardRepository: IBoardRepository
): DeleteBoardFunction => {
  return async (id, userId) => {
    const boardToDelete = await boardRepository.findById(id);
    if (!boardToDelete) throw notFoundError("board");

    if (boardToDelete.creatorId !== userId)
      throw invalidCredentialsError("user id");

    return boardRepository.deleteById(id);
  };
};

export { buildDeleteBoard };

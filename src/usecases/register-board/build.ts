import { IBoardRepository, IUserRepository } from "@/adapters/repositories";
import { createBoard } from "@/domain";
import { notFoundError } from "@/errors";

import { RegisterBoardFunction } from "./types";

const buildRegisterBoard = (
  userRepository: IUserRepository,
  boardRepository: IBoardRepository
): RegisterBoardFunction => {
  return async ({ name, type, userId }) => {
    const user = await userRepository.findById(userId);
    if (!user) throw notFoundError("user");

    return boardRepository.create(
      createBoard({
        name,
        type,
        creatorId: userId,
      })
    );
  };
};

export { buildRegisterBoard };

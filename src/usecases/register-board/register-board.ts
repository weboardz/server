import { IBoardRepository, IUserRepository } from "@/adapters/repositories";
import { createBoard } from "@/domain";
import { notFoundError } from "@/errors";
import { RegisterBoardFunction } from "./types";

type BuildRegisterBoardProps = {
  userRepository: IUserRepository;
  boardRepository: IBoardRepository;
};

const buildRegisterBoard = ({
  userRepository,
  boardRepository,
}: BuildRegisterBoardProps): RegisterBoardFunction => {
  return async ({ name, type, userId }) => {
    const user = await userRepository.findById(userId);
    if (!user) throw notFoundError("user");

    const boardToCreate = createBoard({
      name,
      type,
      creatorId: userId,
    });

    return boardRepository.create(boardToCreate);
  };
};

export { buildRegisterBoard };

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
  return async ({ name, userId }) => {
    const user = await userRepository.findById(userId);
    if (!user) throw notFoundError("user");

    const board = await boardRepository.create(
      createBoard({ name, creatorId: userId, elements: "" })
    );

    return board;
  };
};

export { buildRegisterBoard };

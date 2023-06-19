import {
  boardPrismaRepository,
  userPrismaRepository,
} from "@/adapters/repositories";

import { buildRegisterBoard } from "./register-board";

const registerBoard = buildRegisterBoard({
  userRepository: userPrismaRepository,
  boardRepository: boardPrismaRepository,
});

export { registerBoard };

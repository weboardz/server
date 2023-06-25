import {
  boardPrismaRepository,
  userPrismaRepository,
} from "@/adapters/repositories";

import { buildRegisterBoard } from "./build";

const registerBoard = buildRegisterBoard(
  userPrismaRepository,
  boardPrismaRepository
);

export { registerBoard };

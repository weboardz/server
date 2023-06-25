import { boardPrismaRepository } from "@/adapters/repositories";
import { buildGetUserBoards } from "./build";

const getUserBoards = buildGetUserBoards(boardPrismaRepository);

export { getUserBoards };

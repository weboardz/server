import { boardPrismaRepository } from "@/adapters/repositories";
import { buildDeleteBoard } from "./build";

const deleteBoard = buildDeleteBoard(boardPrismaRepository);

export { deleteBoard };

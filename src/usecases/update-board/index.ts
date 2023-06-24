import { boardPrismaRepository } from "@/adapters/repositories";
import { buildUpdateBoard } from "./build";

const updateBoard = buildUpdateBoard(boardPrismaRepository);

export { updateBoard };

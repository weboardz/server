import { boardPrismaRepository } from "@/adapters/repositories";
import { buildTryEnterBoardRoom } from "./build";

const tryEnterBoardRoom = buildTryEnterBoardRoom(boardPrismaRepository);

export { tryEnterBoardRoom };

import crypto from "crypto";
import { buildCreateBoard } from "./create-board";

const createBoard = buildCreateBoard({
  idGenerator: () => crypto.randomUUID(),
});

export { createBoard };

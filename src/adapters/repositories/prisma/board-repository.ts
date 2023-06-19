import { prisma } from "@/config/prisma";
import { createBoard } from "@/domain";
import { IBoardRepository } from "../";

const create: IBoardRepository["create"] = async ({
  id,
  name,
  elements,
  creatorId,
}) => {
  const boardFromPrisma = await prisma.board.create({
    data: {
      id,
      name,
      elements,
      userId: creatorId,
    },
  });

  return createBoard({ ...boardFromPrisma, creatorId: boardFromPrisma.userId });
};

const boardPrismaRepository: IBoardRepository = {
  create,
};

export { boardPrismaRepository };

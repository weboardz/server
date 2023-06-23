import { prisma } from "@/config/prisma";
import { createBoard } from "@/domain";

import { IBoardRepository } from "../";

const create: IBoardRepository["create"] = async ({
  id,
  name,
  type,
  elements,
  creatorId,
}) => {
  const boardFromPrisma = await prisma.board.create({
    data: {
      id,
      name,
      type,
      elements,
      userId: creatorId,
    },
  });

  return createBoard({ ...boardFromPrisma, creatorId: boardFromPrisma.userId });
};

const findById: IBoardRepository["findById"] = async (id) => {
  const boardFromPrisma = await prisma.board.findUnique({ where: { id } });
  return boardFromPrisma
    ? createBoard({ ...boardFromPrisma, creatorId: boardFromPrisma.userId })
    : null;
};

const findManyByUserId: IBoardRepository["findManyByUserId"] = async (
  userId
) => {
  const boardsFromPrisma = await prisma.board.findMany({ where: { userId } });
  return boardsFromPrisma.map((board) =>
    createBoard({ ...board, creatorId: board.userId })
  );
};

const updateElementsFromId: IBoardRepository["updateElementsFromId"] = async (
  id,
  elements
) => {
  await prisma.board.update({ where: { id }, data: { elements } });
};

const boardPrismaRepository: IBoardRepository = {
  create,
  findById,
  findManyByUserId,
  updateElementsFromId,
};

export { boardPrismaRepository };

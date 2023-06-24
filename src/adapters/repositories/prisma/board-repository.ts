import { prisma } from "@/config/prisma";
import { createBoard } from "@/domain";

import { IBoardRepository } from "../";

const boardPrismaRepository: IBoardRepository = {
  create: async ({ id, name, type, creatorId }) => {
    const boardFromPrisma = await prisma.board.create({
      data: { id, name, type, userId: creatorId },
    });
    return createBoard({
      ...boardFromPrisma,
      creatorId: boardFromPrisma.userId,
    });
  },

  deleteById: async (id) => !!(await prisma.board.delete({ where: { id } })),

  updateById: async (id, data) => {
    const boardFromPrisma = await prisma.board.update({
      where: { id },
      data,
    });
    return createBoard({
      ...boardFromPrisma,
      creatorId: boardFromPrisma.userId,
    });
  },

  findById: async (id) => {
    const queryResult = await prisma.board.findUnique({ where: { id } });
    return queryResult
      ? createBoard({ ...queryResult, creatorId: queryResult.userId })
      : null;
  },

  findManyByUserId: async (userId) => {
    const queryResult = await prisma.board.findMany({ where: { userId } });
    return queryResult.map((boardFromPrisma) =>
      createBoard({ ...boardFromPrisma, creatorId: boardFromPrisma.userId })
    );
  },
};

export { boardPrismaRepository };

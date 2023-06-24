import { prisma } from "@/config/prisma";
import { createBoard } from "@/domain";

import { IBoardRepository } from "../";

const boardPrismaRepository: IBoardRepository = {
  create: async (board) => {
    const boardFromPrisma = await prisma.board.create({
      data: { ...board, userId: board.creatorId },
    });
    return createBoard({
      ...boardFromPrisma,
      creatorId: boardFromPrisma.userId,
    });
  },

  deleteById: async (id) => {
    try {
      await prisma.board.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  updateById: async (id, data) => {
    try {
      const boardFromPrisma = await prisma.board.update({
        where: { id },
        data,
      });
      return createBoard({
        ...boardFromPrisma,
        creatorId: boardFromPrisma.userId,
      });
    } catch (error) {
      console.error(error);
      return null;
    }
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

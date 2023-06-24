import { prisma } from "@/config/prisma";
import { createElement } from "@/domain";

import { IElementRepository } from "../";

const elementPrismaRepository: IElementRepository = {
  create: async (element) =>
    createElement(await prisma.element.create({ data: { ...element } })),

  deleteById: async (id) => {
    try {
      await prisma.element.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  updateById: async (id, data) => {
    try {
      return createElement(
        await prisma.element.update({ where: { id }, data })
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  findById: async (id) => {
    const queryResult = await prisma.element.findUnique({ where: { id } });
    return queryResult ? createElement(queryResult) : null;
  },

  findManyByBoardId: async (boardId) => {
    const queryResult = await prisma.element.findMany({ where: { boardId } });
    return queryResult.map((elementFromPrisma) =>
      createElement(elementFromPrisma)
    );
  },
};

export { elementPrismaRepository };

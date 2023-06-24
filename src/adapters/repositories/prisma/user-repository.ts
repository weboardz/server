import { prisma } from "@/config/prisma";
import { createUser } from "@/domain";

import { IUserRepository } from "../";

const userPrismaRepository: IUserRepository = {
  create: async (user) =>
    createUser(
      await prisma.user.create({
        data: { ...user, password: user.hashedPassword },
      })
    ),

  deleteById: async (id) => {
    try {
      await prisma.user.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  updateById: async (id, data) => {
    try {
      return createUser(await prisma.user.update({ where: { id }, data }));
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  findById: async (id) => {
    const queryResult = await prisma.user.findUnique({ where: { id } });
    return queryResult ? createUser(queryResult) : null;
  },

  findByEmail: async (email) => {
    const queryResult = await prisma.user.findUnique({ where: { email } });
    return queryResult ? createUser(queryResult) : null;
  },
};

export { userPrismaRepository };

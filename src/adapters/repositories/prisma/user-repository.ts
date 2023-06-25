import { prisma } from "@/config/prisma";
import { createUser } from "@/domain";

import { IUserRepository } from "../";

const userPrismaRepository: IUserRepository = {
  create: async ({ id, email, name, hashedPassword, profilePictureUrl }) =>
    createUser(
      await prisma.user.create({
        data: { id, email, name, profilePictureUrl, password: hashedPassword },
      })
    ),

  deleteById: async (id) => !!(await prisma.user.delete({ where: { id } })),

  updateById: async (id, data) =>
    createUser(await prisma.user.update({ where: { id }, data })),

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

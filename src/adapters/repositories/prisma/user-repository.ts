import { prisma } from "@/config/prisma";
import { createUser } from "@/domain";
import { IUserRepository } from "../";

const create: IUserRepository["create"] = async ({
  id,
  name,
  email,
  hashedPassword,
  profilePictureUrl,
}) => {
  const userFromPrisma = await prisma.user.create({
    data: {
      id,
      name,
      email,
      password: hashedPassword,
      profilePictureUrl,
    },
  });

  return createUser(userFromPrisma);
};

const findById: IUserRepository["findById"] = async (id: string) => {
  const userFromPrisma = await prisma.user.findUnique({ where: { id } });
  return userFromPrisma ? createUser(userFromPrisma) : null;
};

const findByEmail: IUserRepository["findByEmail"] = async (email: string) => {
  const userFromPrisma = await prisma.user.findUnique({ where: { email } });
  return userFromPrisma ? createUser(userFromPrisma) : null;
};

const userPrismaRepository: IUserRepository = {
  create,
  findById,
  findByEmail,
};

export { userPrismaRepository };

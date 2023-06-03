import { IUser } from "@/domain";
import { IUserRepository } from "../";

const inMemoryDatabase: IUser[] = [];

const create: IUserRepository["create"] = async (data) => {
  inMemoryDatabase.push(data);
  return data;
};

const findById: IUserRepository["findById"] = async (id) => {
  const user = inMemoryDatabase.find((user) => user.id === id);
  return user ?? null;
};

const findByEmail: IUserRepository["findByEmail"] = async (email) => {
  const user = inMemoryDatabase.find((user) => user.email === email);
  return user ?? null;
};

const userInMemoryRepository: IUserRepository = {
  create,
  findById,
  findByEmail,
};

export { userInMemoryRepository };

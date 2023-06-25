import bcrypt from "bcrypt";

import { userPrismaRepository } from "@/adapters/repositories";
import app from "@/app";

import { buildLogUser } from "./build";

const tokenGenerator = (data: object, id: string) =>
  app.jwt.sign(data, { sub: id, expiresIn: "2 days" });

const passwordChecker = (password: string, hash: string) =>
  bcrypt.compare(password, hash);

const logUser = buildLogUser(
  userPrismaRepository,
  tokenGenerator,
  passwordChecker
);

export { logUser };

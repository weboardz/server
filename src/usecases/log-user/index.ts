import { userPrismaRepository } from "@/adapters/repositories";
import app from "@/app";
import bcrypt from "bcrypt";
import { buildLogUser } from "./log-user";

const ONE_DAY = 60 * 60 * 24;

const logUser = buildLogUser({
  userRepository: userPrismaRepository,
  tokenGenerator: (data: any) => app.jwt.sign(data, { expiresIn: ONE_DAY }),
  passwordChecker: (password: string, hash: string) =>
    bcrypt.compare(password, hash),
});

export { logUser };

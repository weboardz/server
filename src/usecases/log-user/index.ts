import bcrypt from "bcrypt";

import { userPrismaRepository } from "@/adapters/repositories";
import app from "@/app";
import { buildLogUser } from "./log-user";

const logUser = buildLogUser({
  userRepository: userPrismaRepository,

  tokenGenerator: (data: object, id: string) =>
    app.jwt.sign(data, { sub: id, expiresIn: "2 days" }),

  passwordChecker: (password: string, hash: string) =>
    bcrypt.compare(password, hash),
});

export { logUser };

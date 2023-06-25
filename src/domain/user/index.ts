import bcrypt from "bcrypt";
import crypto from "crypto";

import { buildCreateUser } from "./create-user";

const SALT_ROUNDS = 10;

const createUser = buildCreateUser({
  idGenerator: () => crypto.randomUUID(),
  hashGenerator: async (password: string) => bcrypt.hash(password, SALT_ROUNDS),
});

export { createUser };

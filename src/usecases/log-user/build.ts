import { IUserRepository } from "@/adapters/repositories";
import { invalidCredentialsError, notFoundError } from "@/errors";

import { LogUserFunction } from "./types";

const buildLogUser = (
  userRepository: IUserRepository,
  tokenGenerator: (data: object, id: string) => string,
  passwordChecker: (password: string, hash: string) => Promise<boolean>
): LogUserFunction => {
  return async ({ email, password }) => {
    const user = await userRepository.findByEmail(email);
    if (!user) throw notFoundError("user");

    const { id, name, profilePictureUrl, hashedPassword } = user;

    const passwordIsValid = await passwordChecker(password, hashedPassword);
    if (!passwordIsValid) throw invalidCredentialsError("password");

    return {
      token: tokenGenerator({ name, avatarUrl: profilePictureUrl }, id),
    };
  };
};

export { buildLogUser };

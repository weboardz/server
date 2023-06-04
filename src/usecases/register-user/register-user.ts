import { IUserRepository } from "@/adapters/repositories";
import { createUser } from "@/domain";
import { conflictError } from "@/errors";
import { RegisterUserFunction } from "./types";

const buildRegisterUser = (
  userRepository: IUserRepository
): RegisterUserFunction => {
  return async ({ name, email, password, profilePictureUrl }) => {
    const userExists = await userRepository.findByEmail(email);
    if (userExists) throw conflictError("user");

    const userToRegister = await createUser({
      name,
      email,
      password,
      profilePictureUrl,
    });

    return userRepository.create(userToRegister);
  };
};

export { buildRegisterUser };

import { IUserRepository } from "@/adapters/repositories";
import { invalidCredentialsError, notFoundError } from "@/errors";
import { LogUserFunction } from "./types";

type BuildLogUserProps = {
  userRepository: IUserRepository;
  tokenGenerator: (data: any) => string;
  passwordChecker: (password: string, hash: string) => Promise<boolean>;
};

const buildLogUser = ({
  userRepository,
  tokenGenerator,
  passwordChecker,
}: BuildLogUserProps): LogUserFunction => {
  return async ({ email, password }) => {
    const user = await userRepository.findByEmail(email);
    if (!user) throw notFoundError("user");

    const { id, name, profilePictureUrl, hashedPassword } = user;

    const passwordIsValid = await passwordChecker(password, hashedPassword);
    if (!passwordIsValid) throw invalidCredentialsError("password");

    const token = tokenGenerator({ userId: id });

    return { token, name, profilePictureUrl };
  };
};

export { buildLogUser };

import { BuildCreateUserProps, CreateUserFunction } from "./types";

const DEFAULT_PROFILE_PICTURE_URL = "http://localhost:5000/";

const buildCreateUser = ({
  idGenerator,
  hashGenerator,
}: BuildCreateUserProps): CreateUserFunction => {
  return async ({
    id,
    name,
    email,
    password,
    profilePictureUrl = DEFAULT_PROFILE_PICTURE_URL,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) => {
    if (!id) {
      validateDataWithRegex({ name, email, password, profilePictureUrl });
      password = await hashGenerator(password);
      id = idGenerator();
    }

    return Object.freeze({
      id,
      name,
      email,
      hashedPassword: password,
      profilePictureUrl,
      createdAt,
      updatedAt,
    });
  };
};

const validateDataWithRegex = (data: { [index: string]: string }) => {
  const regex: { [index: string]: RegExp } = {
    name: /^[A-Za-z ]{2,32}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^[^\s]{8,16}$/,
    profilePictureUrl: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
  };

  for (const key in data) {
    if (!data[key].match(regex[key])) throw new Error(`Invalid ${key}`);
  }
};

export { buildCreateUser };

import { BuildCreateEntityProps, IEntity } from "../types";

interface IUser extends IEntity {
  name: string;
  email: string;
  hashedPassword: string;
  profilePictureUrl: string;
}

type CreateUserProps = Omit<
  Partial<IUser>,
  "name" | "email" | "hashedPassword"
> & {
  name: string;
  email: string;
  password: string;
};

type CreateUserFunction = (data: CreateUserProps) => Promise<IUser>;

type BuildCreateUserProps = BuildCreateEntityProps & {
  hashGenerator: (text: string) => Promise<string>;
};

export { IUser, CreateUserProps, CreateUserFunction, BuildCreateUserProps };

import { IEntity } from "../types";

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

export { CreateUserFunction, CreateUserProps, IUser };

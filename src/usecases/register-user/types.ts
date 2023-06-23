import { IUser } from "@/domain";

type RegisterUserProps = {
  name: string;
  email: string;
  password: string;
  profilePictureUrl?: string;
};

type RegisterUserFunction = (data: RegisterUserProps) => Promise<IUser>;

export { RegisterUserFunction, RegisterUserProps };

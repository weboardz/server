import { IUser } from "@/domain";

type RegisterUserFunction = (data: {
  name: string;
  email: string;
  password: string;
  profilePictureUrl?: string;
}) => Promise<IUser>;

export { RegisterUserFunction };

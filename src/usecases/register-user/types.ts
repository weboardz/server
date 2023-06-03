import { CreateUserProps, IUser } from "@/domain";

type RegisterUserProps = Omit<
  CreateUserProps,
  "id" | "createdAt" | "updatedAt"
>;

type RegisterUserFunction = (data: RegisterUserProps) => Promise<IUser>;

export { RegisterUserProps, RegisterUserFunction };

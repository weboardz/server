import { userPrismaRepository } from "@/adapters/repositories/";
import { buildRegisterUser } from "./register-user";

const registerUser = buildRegisterUser(userPrismaRepository);

export { registerUser };

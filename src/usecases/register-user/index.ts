import { userPrismaRepository } from "@/adapters/repositories";
import { buildRegisterUser } from "./build";

const registerUser = buildRegisterUser(userPrismaRepository);

export { registerUser };

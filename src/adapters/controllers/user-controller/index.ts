import { fastifyAdapter } from "../fastify-adapter";
import { buildUserController } from "./build";

const userController = buildUserController(fastifyAdapter().http);

export { userController };

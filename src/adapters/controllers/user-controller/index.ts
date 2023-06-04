import { fastifyAdapter } from "../fastify-adapter";
import { buildUserController } from "./user-controller";

const userController = buildUserController(fastifyAdapter);

export { userController };

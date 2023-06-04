import { userController } from "@/adapters/controllers";
import { FastifyInstance } from "fastify";

const userRoute = async (app: FastifyInstance) => {
  app.post("/signup", userController.signUpUser);
};

export { userRoute };

import { userController } from "@/adapters/controllers";
import { FastifyInstance } from "fastify";

import { SignInJsonSchema, SignUpJsonSchema } from "@/schemas";

const authRoute = async (app: FastifyInstance) => {
  app.post(
    "/signup",
    { schema: { body: SignUpJsonSchema } },
    userController.signUpUser
  );

  app.post(
    "/signin",
    { schema: { body: SignInJsonSchema } },
    userController.signInUser
  );
};

export { authRoute };

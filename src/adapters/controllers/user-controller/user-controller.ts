import { registerUser } from "@/usecases";
import httpStatus from "http-status";
import { ControllerAdapter, IHttpProtocol } from "../types";
import { SignUpSchema } from "./schemas";
import { IUserController, SignUpBody } from "./types";

const executeSignUpUser = async ({
  request,
  response,
}: IHttpProtocol<SignUpBody>) => {
  const data = request.body;
  await registerUser(data);
  response.send({ status: httpStatus.CREATED });
};

const buildUserController = (adapter: ControllerAdapter): IUserController => {
  const signUpUser: IUserController["signUpUser"] = async (
    request,
    response
  ) => {
    await executeSignUpUser(
      adapter<SignUpBody>(
        { bodyValidator: (data: any) => SignUpSchema.parse(data) },
        request,
        response
      )
    );
  };

  return Object.freeze({
    signUpUser,
  });
};

export { buildUserController };

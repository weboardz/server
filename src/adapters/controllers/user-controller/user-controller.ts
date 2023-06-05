import { logUser, registerUser } from "@/usecases";
import httpStatus from "http-status";
import { ControllerAdapter, IHttpProtocol } from "../types";
import { SignInSchema, SignUpSchema } from "./schemas";
import { IUserController, SignInBody, SignUpBody } from "./types";

const executeSignUpUser = async ({
  request,
  response,
}: IHttpProtocol<SignUpBody>) => {
  const data = request.body;
  await registerUser(data);
  response.send({ status: httpStatus.CREATED });
};

const executeSignInUser = async ({
  request,
  response,
}: IHttpProtocol<SignInBody>) => {
  const data = request.body;
  const credentials = await logUser(data);
  response.send({ status: httpStatus.OK, payload: credentials });
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

  const signInUser: IUserController["signInUser"] = async (
    request,
    response
  ) => {
    await executeSignInUser(
      adapter<SignInBody>(
        { bodyValidator: (data: any) => SignInSchema.parse(data) },
        request,
        response
      )
    );
  };

  return Object.freeze({
    signUpUser,
    signInUser,
  });
};

export { buildUserController };

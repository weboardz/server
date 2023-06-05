interface IUserController {
  signUpUser: (...args: any[]) => Promise<void>;
  signInUser: (...args: any[]) => Promise<void>;
}

type SignUpBody = {
  name: string;
  email: string;
  password: string;
};

type SignInBody = Omit<SignUpBody, "name">;

export { IUserController, SignUpBody, SignInBody };

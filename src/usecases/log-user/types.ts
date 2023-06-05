type LogUserProps = {
  email: string;
  password: string;
};

type AuthenticationPayload = {
  token: string;
  name: string;
  profilePictureUrl: string;
};

type LogUserFunction = (data: LogUserProps) => Promise<AuthenticationPayload>;

export { AuthenticationPayload, LogUserProps, LogUserFunction };

type LogUserProps = {
  email: string;
  password: string;
};

type LogUserFunction = (data: LogUserProps) => Promise<{ token: string }>;

export { LogUserProps, LogUserFunction };

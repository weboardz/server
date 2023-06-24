type LogUserFunction = (data: {
  email: string;
  password: string;
}) => Promise<{ token: string }>;

export { LogUserFunction };

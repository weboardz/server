import httpStatus from "http-status";

interface ApplicationError extends Error {
  statusCode?: number;
}

export const conflictError = (item: string): ApplicationError => {
  return {
    name: "ConflictError",
    message: `Resource ${item} already exists`,
    statusCode: httpStatus.CONFLICT,
  };
};

export const notFoundError = (item: string): ApplicationError => {
  return {
    name: "NotFoundError",
    message: `Resource ${item} was not found`,
    statusCode: httpStatus.NOT_FOUND,
  };
};

export const invalidFormatError = (item: string): ApplicationError => {
  return {
    name: "InvalidFormatError",
    message: `Resource ${item} is not valid`,
    statusCode: httpStatus.UNPROCESSABLE_ENTITY,
  };
};

export const invalidCredentialsError = (item: string): ApplicationError => {
  return {
    name: "InvalidCredentialsError",
    message: `Resource ${item} is not valid`,
    statusCode: httpStatus.UNAUTHORIZED,
  };
};

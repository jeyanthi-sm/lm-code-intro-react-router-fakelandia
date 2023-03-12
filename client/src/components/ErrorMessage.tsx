import React from "react";

export interface ErrorMessageProps {
   message: string | undefined | boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (
  inputProps: ErrorMessageProps
) => {
  const { message } = inputProps;
  return <>{typeof message === "string" && message !== "OK" && <div className="errorDiv"> {message}</div>}</>;
};
export default ErrorMessage;
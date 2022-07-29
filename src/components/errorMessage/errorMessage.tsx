import React from "react";
import "./errorMessage.scss";

interface IErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: IErrorMessageProps) => {
  return <div className="errorMessage">{text}</div>;
};

export default ErrorMessage;

import React from "react";
import "./button.scss";

interface IButtonProps {
  text: string;
  clickHandler: () => void;
  className: string;
  disabled?: boolean;
}

const Button = ({ text, clickHandler, disabled, className }: IButtonProps) => {
  return (
    <button
      className={`button ${className ? className : ""}`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

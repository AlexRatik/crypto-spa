import React from "react";
import "./button.scss";

interface IButtonProps {
  text: string;
  clickHandler: () => void;
}

const Button = ({ text, clickHandler }: IButtonProps) => {
  return (
    <button className="button" onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import Button from "../button/button";
import "./addButton.scss";

interface IAddButtonProps {
  text: string;
  clickHandler: () => void;
  className: string;
}

const AddButton = ({ text, clickHandler }: IAddButtonProps) => {
  return (
    <Button text={text} clickHandler={clickHandler} className={"button-add"} />
  );
};

export default AddButton;

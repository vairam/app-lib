import React from "react";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = (props) => {
  return <button disabled={props.disabled}>{props.children}</button>;
};

export default Button;

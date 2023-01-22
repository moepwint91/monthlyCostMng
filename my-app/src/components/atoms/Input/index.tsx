import React from "react";
import Props from "./input.type";

function Input(props: Props) {
  const { type = "text", className = "form-control", ...rest } = props;
  return <input type={type} className={className} {...rest} />;
}

export default Input;

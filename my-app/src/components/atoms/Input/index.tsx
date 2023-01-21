import React from "react";
import Props from "./input.type";

function Input(props: Props) {
  const { ...rest } = props;
  return <input {...rest} />;
}

export default Input;

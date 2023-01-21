import React from "react";
import Props from "./button.type";

function Button(props: Props) {
  const { btnTxt, ...rest } = props;
  return <button {...rest}>{btnTxt}</button>;
}

export default Button;

import React from "react";
import ButtonType from "utils/enum/ButtonType";
import Props from "./button.type";

function Button(props: Props) {
  const { btnTxt, className = ButtonType.Primary, children, ...rest } = props;
  return (
    <button className={`btn ${className}`} {...rest}>
      {children}
      {btnTxt}
    </button>
  );
}

export default Button;

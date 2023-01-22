import React from "react";
import Props from "./radio.type";

function Radio(props: Props) {
  const { className = "form-check-input", name = "default", ...rest } = props;
  return <input type="radio" className={className} name={name} {...rest} />;
}

export default Radio;

import React from "react";
import Props from "./checkbox.type";

function CheckBox(props: Props) {
  const { className = "form-check-input", ...rest } = props;
  return <input type="checkbox" className={className} {...rest} />;
}

export default CheckBox;

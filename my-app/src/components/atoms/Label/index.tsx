import React from "react";
import Props from "./label.type";

function Label(props: Props) {
  const { className = "form-label", ...rest } = props;
  return <label className={className} {...rest}></label>;
}

export default Label;

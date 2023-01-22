import React from "react";
import Props from "./label.type";

function Label(props: Props) {
  const { ...rest } = props;
  return <label {...rest}></label>;
}

export default Label;

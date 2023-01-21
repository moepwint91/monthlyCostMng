import React from "react";
import Props from "./checkbox.type";

function CheckBox(props: Props) {
  const { ...rest } = props;
  return <input type="checkbox" {...rest} />;
}

export default CheckBox;

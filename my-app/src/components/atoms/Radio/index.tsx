import React from "react";
import Props from "./radio.type";

function Radio(props: Props) {
  const { ...rest } = props;
  return <input type="radio" />;
}

export default Radio;

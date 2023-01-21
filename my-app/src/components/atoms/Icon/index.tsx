import React from "react";
import Props from "./icon.type";

function Icon(props: Props) {
  const { ...rest } = props;
  return <img {...rest}></img>;
}

export default Icon;

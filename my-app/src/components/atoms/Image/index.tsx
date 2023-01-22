import React from "react";
import Props from "./image.type";

function Image(props: Props) {
  const { ...rest } = props;
  return <img {...rest}></img>;
}

export default Image;

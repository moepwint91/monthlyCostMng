import React from "react";
import Props from "./link.type";

function Link(props: Props) {
  const { ...rest } = props;
  return <link {...rest}></link>;
}

export default Link;

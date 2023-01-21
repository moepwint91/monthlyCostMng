import React from "react";
import Props from "./label.type";

function Lable(props: Props) {
  const { ...rest } = props;
  return <Lable {...rest}></Lable>;
}

export default Lable;

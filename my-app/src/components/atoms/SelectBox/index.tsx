import React from "react";
import Props from "./selectbox.type";

function SelectBox(props: Props) {
  const { ...rest } = props;
  return <select {...rest}></select>;
}

export default SelectBox;

import React from "react";
import Props from "./selectbox.type";

function SelectBox(props: Props) {
  const { className = "form-select", ...rest } = props;
  return <select className={className} {...rest}></select>;
}

export default SelectBox;

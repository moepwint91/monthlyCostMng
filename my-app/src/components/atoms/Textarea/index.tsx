import React from "react";
import Props from "./textarea.type";

function Textarea(props: Props) {
  const { ...rest } = props;
  return <textarea {...rest}></textarea>;
}

export default Textarea;

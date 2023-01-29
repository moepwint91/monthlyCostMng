import React from "react";
import Props from "./label.type";

function Label(props: Props) {
  const { className = "form-label", children, ...rest } = props;
  return (
    <label className={className} {...rest}>
      {children}
    </label>
  );
}

export default Label;

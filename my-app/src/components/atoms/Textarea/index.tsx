import React from "react";
import Props from "./textarea.type";

function Textarea(props: Props) {
  const { rows = 4, cols = 40, className = "form-control", ...rest } = props;
  return (
    <textarea
      rows={rows}
      cols={cols}
      className={className}
      {...rest}
    ></textarea>
  );
}

export default Textarea;

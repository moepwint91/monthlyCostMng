import React from "react";
import Props from "./datetimepicker.type";

function DateTimePicker(props: Props) {
  const { className = "form-control", ...rest } = props;
  return <input type="datetime-local" className={className} {...rest} />;
}

export default DateTimePicker;

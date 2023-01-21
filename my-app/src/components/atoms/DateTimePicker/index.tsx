import React from "react";
import Props from "./datetimepicker.type";

function DateTimePicker(props: Props) {
  const { ...rest } = props;
  return <input type="datetime-local" />;
}

export default DateTimePicker;

import React from "react";
import Label from "components/atoms/Label";
import Radio from "components/atoms/Radio";

function RadioboxList() {
  return (
    <div>
      <Radio id="flexRadioDefault1" />
      <Label htmlFor="flexRadioDefault1">YES</Label>
      <Radio id="flexRadioDefault2" defaultChecked />
      <Label htmlFor="flexRadioDefault2">NO</Label>
    </div>
  );
}

export default RadioboxList;

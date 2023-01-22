import React from "react";
import CheckBox from "../../components/atoms/CheckBox";
import Label from "../../components/atoms/Label";

function CheckboxList() {
  return (
    <div>
      <CheckBox id="flexCheckDefault" />
      <Label htmlFor="flexCheckDefault">YES</Label>
      <CheckBox id="flexCheckChecked" defaultChecked />
      <Label htmlFor="flexCheckChecked">NO</Label>
    </div>
  );
}

export default CheckboxList;

import React from "react";
import Input from "components/atoms/Input";
import Label from "components/atoms/Label";

function InputList() {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" />
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />
    </div>
  );
}

export default InputList;

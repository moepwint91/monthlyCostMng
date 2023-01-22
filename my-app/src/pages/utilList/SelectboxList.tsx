import React from "react";
import SelectBox from "components/atoms/SelectBox";

function SelectboxList() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <SelectBox defaultValue="0" onChange={handleChange}>
        <option value="0">Open this select menu1</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </SelectBox>
      <SelectBox defaultValue="2" onChange={handleChange}>
        <option>Open this select menu2</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </SelectBox>
    </div>
  );
}

export default SelectboxList;
function handleChange(event: Event) {
  throw new Error("Function not implemented.");
}

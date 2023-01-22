import React from "react";
import ButtonList from "./ButtonList";
import CheckboxList from "./CheckboxList";
import DateTimePickerList from "./DateTimePickerList";
import ImageList from "./ImageList";
import InputList from "./InputList";
import LabelList from "./LabelList";
import RadioboxList from "./RadioboxList";
import SelectboxList from "./SelectboxList";
import TextareaList from "./TextareaList";

function UtilList() {
  return (
    <>
      <ButtonList />
      <CheckboxList />
      <LabelList />
      <RadioboxList />
      <TextareaList />
      <SelectboxList />
      <InputList />
      <ImageList />
      <DateTimePickerList />
    </>
  );
}

export default UtilList;

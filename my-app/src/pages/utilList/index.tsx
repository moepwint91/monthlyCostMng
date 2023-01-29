import Input from "components/atoms/Input";
import Label from "components/atoms/Label";
import Textarea from "components/atoms/Textarea";
import FormGroup from "components/molecules/FormGroup";
import SearchBar from "components/molecules/SearchBar";
import Footer from "components/organisms/common/Footer";
import NavBar from "components/organisms/common/NavBar";
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
      {/* <ButtonList />
      <CheckboxList />
      <LabelList />
      <RadioboxList />
      <TextareaList />
      <SelectboxList />
      <InputList />
      <ImageList />
      <DateTimePickerList /> */}
      <NavBar />
      <FormGroup label={<Label>Enter Name</Label>} item={<Input />} />
      <FormGroup
        label={<Label children="Enter Comment" />}
        item={<Textarea />}
      />
      <Footer />
    </>
  );
}

export default UtilList;

import React from "react";
import Label from "components/atoms/Label";
import Textarea from "components/atoms/Textarea";

function TextareaList() {
  return (
    <div>
      <div>
        <Label htmlFor="Comment1">Comment1</Label>
        <Textarea id="Comment1"></Textarea>
      </div>
      <div>
        <Label htmlFor="Comment2">Comment2</Label>
        <Textarea id="Comment2" rows={8} cols={60}></Textarea>
      </div>
      <div>
        <Label htmlFor="Comment3">Comment3</Label>
        <Textarea
          id="Comment3"
          rows={8}
          cols={60}
          placeholder="comment here"
        ></Textarea>
      </div>
    </div>
  );
}

export default TextareaList;

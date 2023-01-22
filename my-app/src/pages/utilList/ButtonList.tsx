import React from "react";
import Button from "components/atoms/Button";
import ButtonType from "utils/enum/ButtonType";

function ButtonList() {
  return (
    <div>
      {" "}
      <Button btnTxt="Primary" />
      <Button btnTxt="Secondary" className={ButtonType.Secondary} />
      <Button btnTxt="Success" className={ButtonType.Success} />
      <Button btnTxt="Danger" className={ButtonType.Danger} />
      <Button
        btnTxt="BtnWithIcon1"
        children={<i className="bi bi-alexa"></i>}
      />
      <Button btnTxt="BtnWithIcon2">
        <i className="bi bi-alexa"></i>
      </Button>
      <Button
        btnTxt={
          <div>
            BtnWithIcon3<i className="bi bi-alexa"></i>
          </div>
        }
      />
      <Button>
        <div>
          BtnWithIcon4<i className="bi bi-alexa"></i>
        </div>
      </Button>
    </div>
  );
}

export default ButtonList;

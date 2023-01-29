import Label from "components/atoms/Label";
import React from "react";
import Props from "./index.type";
import styles from "./index.module.css";

function FormGroup(props: Props) {
  const { label, item } = props;
  return (
    <div className={`${styles.container} row`}>
      <div className="col-2">{label}</div>
      <div className="col-10">{item}</div>
    </div>
  );
}

export default FormGroup;

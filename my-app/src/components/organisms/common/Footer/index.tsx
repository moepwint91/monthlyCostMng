import Image from "components/atoms/Image";
import React from "react";
import styles from "./index.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="row">
        <div className="col-2 d-flex align-items-center">About</div>
        <div className="col-2 d-flex align-items-center">Contact</div>
        <div className="col-6 d-flex align-items-center">
          Place sticky footer content here.
        </div>
        <div className="col-2 d-flex align-items-center">
          <i className="ri-facebook-circle-fill"></i>
          <i className="ri-line-fill"></i>
          <i className="ri-whatsapp-fill"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

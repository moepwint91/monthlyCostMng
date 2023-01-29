import Image from "components/atoms/Image";
import Input from "components/atoms/Input";
import React from "react";
import styles from "./index.module.css";

function SearchBar() {
  return (
    <>
      <div className={styles.container}>
        <Input placeholder="Search input keyword" className={styles.input} />
        <Image
          src="/media/image/icons8-search-more-30.png"
          className={styles.icon}
        />
      </div>
    </>
  );
}

export default SearchBar;

import React, { useRef } from "react";
import { memo } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo((props) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className={styles.container}>
      <button className={styles.logo} onClick={props.onLogoClick}>
        <i className="fab fa-youtube"></i>
      </button>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" className={styles.input} />
        <button type="submit" className={styles.btn}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
});

export default SearchHeader;

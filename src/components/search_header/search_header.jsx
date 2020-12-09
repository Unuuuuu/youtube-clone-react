import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <i className="fab fa-youtube"></i>
        <input ref={inputRef} type="text" className={styles.input} />
        <button type="submit" className={styles.btn}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchHeader;

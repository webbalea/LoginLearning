import React, { useRef } from "react";
import { useEffect } from "react/cjs/react.production.min";
import styles from "./input.module.css";

const Input = (props) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  return (
    <div
      className={`${styles.control} ${
        props.isValid === false ? styles.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;

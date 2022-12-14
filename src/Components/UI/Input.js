import React from "react";
import Classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={Classes.input}>
      <label htmlFor={props.input.id}> {props.lable} </label>
      <input {...props.input} ref={ref} />
    </div>
  );
});
export default Input;

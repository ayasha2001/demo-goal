import React from "react";

import "./Button.css";

const Button = (props) => {
  console.log(props.style.backgroundColor);
  return (
    <button
      type={props.type}
      className="button"
      style={{ backgroundColor: props.style.backgroundColor }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

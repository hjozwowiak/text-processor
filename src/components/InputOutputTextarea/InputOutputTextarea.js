import React from "react";
import PropTypes from "prop-types";

import ButtonGroup from "./ButtonGroup/ButtonGroup";

import "./InputOutputTextarea.scss";

const InputOutputTextarea = ({ type, placeholder, classes }) => {
  return (
    <div className="inputOutputContainer">
      <textarea
        className={`__inputText inputOutputContainer__inputTextarea${
          classes ? ` ${classes}` : ""
        }`}
        placeholder={placeholder}
      />
      {type === "output" ? <ButtonGroup /> : ""}
    </div>
  );
};

export default InputOutputTextarea;

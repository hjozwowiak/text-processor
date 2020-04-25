import React from "react";
import PropTypes from "prop-types";

import TextArea from "../Inputs/TextArea/TextArea";
import ButtonGroup from "./ButtonGroup/ButtonGroup";

import "./InputOutputTextarea.scss";

const InputOutputTextarea = ({
  type,
  placeholder,
  classes,
  value,
  newValue,
  runMod,
  undo,
  redo,
}) => {
  const handleChange = (event) => {
    if (newValue) {
      newValue(event.target.value);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (newValue) {
        newValue(
          value.substring(0, event.target.selectionStart) +
            "\t" +
            value.substring(event.target.selectionEnd)
        );
      }
    }
  };

  return (
    <div className="inputOutputContainer">
      <TextArea
        classes={`__inputText inputOutputContainer__inputTextarea${
          classes ? ` ${classes}` : ""
        }`}
        placeholder={placeholder}
        value={value}
        newValue={newValue}
        readOnly={type === "output" ? true : false}
      />
      {type === "output" ? (
        <ButtonGroup runMod={runMod} undo={undo} redo={redo} />
      ) : (
        ""
      )}
    </div>
  );
};

InputOutputTextarea.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
  value: PropTypes.string,
  newValue: PropTypes.func,
  runMod: PropTypes.func,
  undo: PropTypes.func,
  redo: PropTypes.func,
};

export default InputOutputTextarea;

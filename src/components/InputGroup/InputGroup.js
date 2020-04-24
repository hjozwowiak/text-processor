import React from "react";
import PropTypes from "prop-types";

import "./InputGroup.scss";

const InputGroup = ({ children, classes, type }) => {
  return (
    <div
      className={`inputGroup${type === "small" ? "Small" : ""}${
        classes ? ` ${classes}` : ""
      }`}
    >
      {children}
    </div>
  );
};

export default InputGroup;

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

InputGroup.propTypes = {
  classes: PropTypes.string,
  type: PropTypes.string,
};

export default InputGroup;

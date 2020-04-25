import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ classes, placeholder, readOnly, value, newValue }) => {
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
    <textarea
      placeholder={placeholder}
      className={classes ? classes : ""}
      value={value}
      readOnly={readOnly}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

TextArea.defaultProps = {
  readOnly: false,
};

TextArea.propTypes = {
  classes: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  newValue: PropTypes.func,
};

export default TextArea;

import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ children, classes, description, value, newValue }) => {
  const handleChange = (event) => {
    if (newValue) {
      newValue(event.target.checked);
    }
  };

  return (
    <div className={classes ? classes : ""}>
      <input checked={value} onChange={handleChange} type="checkbox" />
      <span>{description}</span>
      {children}
    </div>
  );
};

Checkbox.propTypes = {
  classes: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.bool,
  newValue: PropTypes.func,
};

export default Checkbox;

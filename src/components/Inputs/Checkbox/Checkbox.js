import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ children, classes, description }) => {
  return (
    <div className={classes ? classes : ""}>
      <input type="checkbox" />
      <span>{description}</span>
      {children}
    </div>
  );
};

Checkbox.propTypes = {
  classes: PropTypes.string,
  description: PropTypes.string,
};

export default Checkbox;

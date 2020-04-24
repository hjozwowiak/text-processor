import React from "react";
import PropTypes from "prop-types";

const Radio = ({ classes, description, name }) => {
  return (
    <div className={classes ? classes : ""}>
      <input type="radio" name={name} />
      <span>{description}</span>
    </div>
  );
};

Radio.propTypes = {
  classes: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
};

export default Radio;

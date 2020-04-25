import React from "react";
import PropTypes from "prop-types";

const Radio = ({
  classes,
  descriptions,
  name,
  number,
  selected,
  newSelected,
}) => {
  const handleChange = (event) => {
    if (newSelected) {
      newSelected(event.target.value);
    }
  };

  const result = [];
  for (let i = 0; i < number; i++) {
    result.push(
      <div>
        <input
          type="radio"
          key={`${name}-${i}`}
          name={name}
          value={`${name}-${i}`}
          selected={selected === `${name}-${i}`}
          onChange={handleChange}
        />
        <span>{descriptions[i]}</span>
      </div>
    );
  }

  return <div className={classes ? classes : ""}>{result}</div>;
};

Radio.propTypes = {
  classes: PropTypes.string,
  descriptions: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.number,
  selected: PropTypes.string,
  newSelected: PropTypes.func,
};

export default Radio;

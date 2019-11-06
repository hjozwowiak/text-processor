import React from "react";
import PropTypes from "prop-types";

const InputCheckbox = ({
    checked,
    targetClasses,
    description,
    callbackValue
}) => {
    const classes = targetClasses.join(" ");

    const handleChange = event => {
        if (callbackValue) {
            callbackValue(event.target.checked);
        }
    };

    return (
        <div className={classes}>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <span>{description}</span>
        </div>
    );
};

InputCheckbox.propTypes = {
    checked: PropTypes.bool,
    targetClasses: PropTypes.array,
    description: PropTypes.string,
    callbackValue: PropTypes.func
};

InputCheckbox.defaultProps = {
    targetClasses: []
};

export default InputCheckbox;

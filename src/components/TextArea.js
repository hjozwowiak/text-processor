import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ value, targetClasses, callbackValue, placeholder }) => {
    const classes = targetClasses.join(" ");

    const handleChange = event => {
        if (callbackValue) {
            callbackValue(event.target.value);
        }
    };

    const handleKeyDown = event => {
        if (event.key === "Tab") {
            event.preventDefault();
            if (callbackValue) {
                callbackValue(
                    value.substring(0, event.target.selectionStart) +
                        "\t" +
                        value.substring(event.target.selectionEnd)
                );
            }
        }
    };

    return (
        <textarea
            className={classes}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    );
};

TextArea.propTypes = {
    value: PropTypes.string,
    targetClasses: PropTypes.array,
    callbackValue: PropTypes.func,
    placeholder: PropTypes.string
};

TextArea.defaultProps = {
    targetClasses: []
};

export default TextArea;

import React from "react";
import PropTypes from "prop-types";

const InputRadio = ({
    selected,
    targetClasses,
    number,
    descriptions,
    name,
    callbackValue
}) => {
    const classes = targetClasses.join(" ");

    const handleChange = event => {
        if (callbackValue) {
            callbackValue(event.target.value);
        }
    };

    const result = [];
    for (let i = 0; i < number; i++) {
        result.push(
            <div className={classes} key={`${name}-${i}`}>
                <input
                    type="radio"
                    name={name}
                    value={`${name}-${i}`}
                    selected={selected === `${name}-${i}`}
                    onChange={handleChange}
                />
                <span>{descriptions[i]}</span>
            </div>
        );
    }

    return <div>{result}</div>;
};

InputRadio.propTypes = {
    selected: PropTypes.string,
    targetClasses: PropTypes.array,
    descriptions: PropTypes.array,
    callbackValue: PropTypes.func
};

InputRadio.defaultProps = {
    targetClasses: []
};

export default InputRadio;

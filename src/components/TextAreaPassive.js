import React from 'react';
import PropTypes from 'prop-types';

const TextAreaPassive = ({targetClasses = [], value, placeholder}) => {
    return(
        <textarea
            className={targetClasses.join(' ')}
            value={value}
            placeholder={placeholder}
            readOnly
            />
    );
}

TextAreaPassive.propTypes = {
    targetClass: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string
}

export default TextAreaPassive;
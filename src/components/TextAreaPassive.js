import React from 'react';
import PropTypes from 'prop-types';

const TextAreaPassive = ({targetClasses = [], value}) => {
    return(
        <textarea
            className={targetClasses.join(' ')}
            value={value}
            readOnly
            />
    );
}

TextAreaPassive.propTypes = {
    targetClass: PropTypes.string,
    value: PropTypes.string
}

export default TextAreaPassive;
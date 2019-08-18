import React from 'react';
import PropTypes from 'prop-types';
import '../style/TextArea.scss';

const TextAreaPassive = ({targetClass, value}) => {
    return(
        <textarea
            className={targetClass}
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
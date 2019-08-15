import React from 'react';
import '../style/TextArea.scss';

const TextAreaPassive = props => {
    return(
        <textarea
            className={props.targetClass}
            value={props.value}
            readOnly
            />
    );
}

export default TextAreaPassive;
import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';
import '../style/ContainerInput.scss';

const ContainerInput = ({input, updateInput}) => {
    return(
        <div className='ContainerInput'>
            <TextArea
                input={input}
                callbackValue={updateInput} />
        </div>
    )
}

ContainerInput.propTypes = {
    input: PropTypes.string,
    updateInput: PropTypes.func
}

export default ContainerInput;
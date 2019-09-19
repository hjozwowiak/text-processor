import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';

const ContainerInput = ({input, updateInput}) => {
    return(
        <div className='container--section'>
            <TextArea
                targetClasses={['input--textarea-large','container-borderRoundTopLeftLarge','container-borderRoundTopRightLarge','container-borderRoundBottomRightLarge','container-borderRoundBottomLeftLarge']}
                input={input}
                placeholder='Input'
                callbackValue={updateInput} />
        </div>
    )
}

ContainerInput.propTypes = {
    input: PropTypes.string,
    updateInput: PropTypes.func
}

export default ContainerInput;
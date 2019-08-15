import React from 'react';
import TextArea from './TextArea';
import '../style/ContainerInput.scss';

const ContainerInput = props => {
    return(
        <div className='ContainerInput'>
            <TextArea
                input={props.input}
                callbackValue={props.updateInput} />
        </div>
    )
}

export default ContainerInput;
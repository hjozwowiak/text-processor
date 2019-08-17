import React from 'react';
import TextArea from './TextArea';
import '../style/ContainerModifiersToAdd.scss';

const ContainerModifiersToAdd = props => {
    return(
        <div className="ContainerModifiersToAdd">
            <TextArea
                targetClass='ContainerModifiersToAdd--variant-start'
                toAddStart={props.toAddStart}
                callbackValue={props.updateToAddStart} />
            <TextArea
                targetClass='ContainerModifiersToAdd--variant-end'
                toAddEnd={props.toAddEnd}
                callbackValue={props.updateToAddEnd} />
        </div>
    )
}

export default ContainerModifiersToAdd;
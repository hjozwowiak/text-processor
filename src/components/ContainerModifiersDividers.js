import React from 'react';
import TextArea from './TextArea';
import '../style/ContainerModifiersDividers.scss';

const ContainerModifiersDividers = props => {
    return(
        <div className="ContainerModifiersDividers">
            <TextArea
                targetClass='dividersTextArea--variant-divider'
                divider={props.divider}
                callbackValue={props.updateDivider} />
            <TextArea
                targetClass='dividersTextArea--variant-connector'
                connector={props.connector}
                callbackValue={props.updateConnector} />
        </div>
    )
}

export default ContainerModifiersDividers;
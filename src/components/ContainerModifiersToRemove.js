import React from 'react';
import TextArea from './TextArea';
import '../style/ContainerModifiersToRemove.scss';

const ContainerModifiersToRemove = props => {
    return(
        <div className="toRemoveContainer ContainerModifiersToRemove">
            <TextArea
                targetClass='toRemoveTextArea--variant-startEnd'
                toRemoveStartEnd={props.toRemoveStartEnd}
                callbackValue={props.updateToRemoveStartEnd} />
            <TextArea
                targetClass='toRemoveTextArea--variant-entireString'
                toRemoveEntireString={props.toRemoveEntireString}
                callbackValue={props.updateToRemoveEntireString} />
            <TextArea
                targetClass='toRemoveTextArea--variant-entireSingle'
                toRemoveEntireSingle={props.toRemoveEntireSingle}
                callbackValue={props.updateToRemoveEntireSingle} />
        </div>
    )
}

export default ContainerModifiersToRemove;
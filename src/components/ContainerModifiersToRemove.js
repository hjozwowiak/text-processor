import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';
import '../style/ContainerModifiersToRemove.scss';

const ContainerModifiersToRemove = ({toRemoveStartEnd, updateToRemoveStartEnd, toRemoveEntireString, updateToRemoveEntireString, toRemoveEntireSingle, updateToRemoveEntireSingle}) => {
    return(
        <div className="toRemoveContainer ContainerModifiersToRemove">
            <TextArea
                targetClass='toRemoveTextArea--variant-startEnd'
                toRemoveStartEnd={toRemoveStartEnd}
                callbackValue={updateToRemoveStartEnd} />
            <TextArea
                targetClass='toRemoveTextArea--variant-entireString'
                toRemoveEntireString={toRemoveEntireString}
                callbackValue={updateToRemoveEntireString} />
            <TextArea
                targetClass='toRemoveTextArea--variant-entireSingle'
                toRemoveEntireSingle={toRemoveEntireSingle}
                callbackValue={updateToRemoveEntireSingle} />
        </div>
    )
}

ContainerModifiersToRemove.propTypes = {
    toRemoveStartEnd: PropTypes.string,
    updateToRemoveStartEnd: PropTypes.func,
    toRemoveEntireString: PropTypes.string,
    updateToRemoveEntireString: PropTypes.func,
    toRemoveEntireSingle: PropTypes.string,
    updateToRemoveEntireSingle: PropTypes.func
}

export default ContainerModifiersToRemove;
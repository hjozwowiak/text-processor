import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';

const ContainerModifiersToRemove = ({toRemoveStartEnd, updateToRemoveStartEnd, toRemoveEntireString, updateToRemoveEntireString, toRemoveEntireSingle, updateToRemoveEntireSingle}) => {
    return(
        <div className='container--section container-directionColumn'>
            <TextArea
                targetClasses={['input--textarea-medium','container-borderRoundTopLeftMedium','container-borderRoundTopRightMedium']}
                toRemoveStartEnd={toRemoveStartEnd}
                placeholder='Remove at the BEGINNING and END'
                callbackValue={updateToRemoveStartEnd} />
            <TextArea
                targetClasses={['input--textarea-medium']}
                toRemoveEntireString={toRemoveEntireString}
                placeholder='Remove every occurrence of a given phrase'
                callbackValue={updateToRemoveEntireString} />
            <TextArea
                targetClasses={['input--textarea-medium','container-borderRoundBottomLeftMedium','container-borderRoundBottomRightMedium']}
                toRemoveEntireSingle={toRemoveEntireSingle}
                placeholder='Remove every occurrence of given characters'
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
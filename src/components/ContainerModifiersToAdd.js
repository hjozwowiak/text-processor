import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';

const ContainerModifiersToAdd = ({toAddStart, updateToAddStart, toAddEnd, updateToAddEnd}) => {
    return(
        <div className="container--section">
            <TextArea
                targetClasses={['input--textarea-medium','container-borderRoundTopLeftMedium','container-borderRoundBottomLeftMedium']}
                toAddStart={toAddStart}
                placeholder='Add at the BEGINNING'
                callbackValue={updateToAddStart} />
            <TextArea
                targetClasses={['input--textarea-medium','container-borderRoundTopRightMedium','container-borderRoundBottomRightMedium']}
                toAddEnd={toAddEnd}
                placeholder='Add at the END'
                callbackValue={updateToAddEnd} />
        </div>
    )
}

ContainerModifiersToAdd.propTypes = {
    toAddStart: PropTypes.string,
    updateToAddStart: PropTypes.func,
    toAddEnd: PropTypes.string,
    updateToAddEnd: PropTypes.func
}

export default ContainerModifiersToAdd;
import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';

const ContainerModifiersToAdd = ({toAddStart, updateToAddStart, toAddEnd, updateToAddEnd}) => {
    return(
        <div className="container--section">
            <TextArea
                targetClasses={['input--textarea-small','container-borderRoundTopLeftMedium','container-borderRoundBottomLeftMedium']}
                toAddStart={toAddStart}
                callbackValue={updateToAddStart} />
            <TextArea
                targetClasses={['input--textarea-small','container-borderRoundTopRightMedium','container-borderRoundBottomRightMedium']}
                toAddEnd={toAddEnd}
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
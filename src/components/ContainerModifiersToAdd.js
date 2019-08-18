import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';
import '../style/ContainerModifiersToAdd.scss';

const ContainerModifiersToAdd = ({toAddStart, updateToAddStart, toAddEnd, updateToAddEnd}) => {
    return(
        <div className="ContainerModifiersToAdd">
            <TextArea
                targetClass='ContainerModifiersToAdd--variant-start'
                toAddStart={toAddStart}
                callbackValue={updateToAddStart} />
            <TextArea
                targetClass='ContainerModifiersToAdd--variant-end'
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
import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';

const ContainerModifiersDividers = ({divider, updateDivider, connector, updateConnector}) => {
    return(
        <div className='container--section'>
            <TextArea
                targetClasses={['input--textarea-medium','container-borderRoundTopLeftMedium','container-borderRoundBottomLeftMedium']}
                divider={divider}
                placeholder='Divider'
                callbackValue={updateDivider} />
            <TextArea
                targetClasses={['input--textarea-medium','container-borderRoundTopRightMedium','container-borderRoundBottomRightMedium']}
                connector={connector}
                placeholder='Connector'
                callbackValue={updateConnector} />
        </div>
    )
}

ContainerModifiersDividers.propTypes = {
    divider: PropTypes.string,
    updateDivider: PropTypes.func,
    connector: PropTypes.string,
    updateConnector: PropTypes.func
}

export default ContainerModifiersDividers;
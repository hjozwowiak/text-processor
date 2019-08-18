import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';
import '../style/ContainerModifiersDividers.scss';

const ContainerModifiersDividers = ({divider, updateDivider, connector, updateConnector}) => {
    return(
        <div className="ContainerModifiersDividers">
            <TextArea
                targetClass='dividersTextArea--variant-divider'
                divider={divider}
                callbackValue={updateDivider} />
            <TextArea
                targetClass='dividersTextArea--variant-connector'
                connector={connector}
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
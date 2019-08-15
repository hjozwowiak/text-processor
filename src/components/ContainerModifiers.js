import React from 'react';
import ContainerModifiersDividers from './ContainerModifiersDividers';
import ContainerModifiersToRemove from './ContainerModifiersToRemove';
import ToAdd from './ToAdd';
import Checkboxes from './Checkboxes';
import '../style/ContainerModifiers.scss';

const ContainerModifiers = props => {
    return(
        <div className="ContainerModifiers">
            <div className='colNarrow'>
                <ContainerModifiersDividers
                    divider={props.divider}
                    updateDivider={props.updateDivider}
                    connector={props.connector}
                    updateConnector={props.updateConnector} />
                <ContainerModifiersToRemove
                    toRemoveStartEnd={props.toRemoveStartEnd}
                    updateToRemoveStartEnd={props.updateToRemoveStartEnd}
                    toRemoveEntireString={props.toRemoveEntireString}
                    updateToRemoveEntireString={props.updateToRemoveEntireString}
                    toRemoveEntireSingle={props.toRemoveEntireSingle}
                    updateToRemoveEntireSingle={props.updateToRemoveEntireSingle} />
            </div>
            <div className='colWide'>
                <ToAdd />
                <Checkboxes />
            </div>
        </div>
    )
}

export default ContainerModifiers;
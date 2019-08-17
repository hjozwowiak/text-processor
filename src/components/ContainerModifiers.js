import React from 'react';
import ContainerModifiersDividers from './ContainerModifiersDividers';
import ContainerModifiersToRemove from './ContainerModifiersToRemove';
import ContainerModifiersInputs from './ContainerModifiersInputs';
import ContainerModifiersToAdd from './ContainerModifiersToAdd';
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
                <ContainerModifiersToAdd
                    toAddStart={props.toAddStart}
                    updateToAddStart={props.updateToAddStart}
                    toAddEnd={props.toAddEnd}
                    updateToAddEnd={props.updateToAddEnd} />
                <ContainerModifiersInputs
                    replace={props.replace}
                    updateReplace={props.updateReplace}
                    removeDiacritics={props.removeDiacritics}
                    updateRemoveDiacritics={props.updateRemoveDiacritics}
                    removeEmptyPhrases={props.removeEmptyPhrases}
                    updateRemoveEmptyPhrases={props.updateRemoveEmptyPhrases}
                    caps={props.caps}
                    updateCaps={props.updateCaps} />
            </div>
        </div>
    )
}

export default ContainerModifiers;
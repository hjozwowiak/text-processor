import React from 'react';
import PropTypes from 'prop-types';
import ContainerModifiersDividers from './ContainerModifiersDividers';
import ContainerModifiersToRemove from './ContainerModifiersToRemove';
import ContainerModifiersInputs from './ContainerModifiersInputs';
import ContainerModifiersToAdd from './ContainerModifiersToAdd';

const ContainerModifiers = ({divider, updateDivider, connector, updateConnector, toRemoveStartEnd, updateToRemoveStartEnd, toRemoveEntireString, updateToRemoveEntireString, toRemoveEntireSingle, updateToRemoveEntireSingle, toAddStart, updateToAddStart, toAddEnd, updateToAddEnd, replace, updateReplace, removeDiacritics, updateRemoveDiacritics, removeEmptyPhrases, updateRemoveEmptyPhrases, caps, updateCaps}) => {
    return(
        <div className="container--row">
            <div className='container--column-narrow container-directionColumn'>
                <ContainerModifiersDividers
                    divider={divider}
                    updateDivider={updateDivider}
                    connector={connector}
                    updateConnector={updateConnector} />
                <ContainerModifiersToRemove
                    toRemoveStartEnd={toRemoveStartEnd}
                    updateToRemoveStartEnd={updateToRemoveStartEnd}
                    toRemoveEntireString={toRemoveEntireString}
                    updateToRemoveEntireString={updateToRemoveEntireString}
                    toRemoveEntireSingle={toRemoveEntireSingle}
                    updateToRemoveEntireSingle={updateToRemoveEntireSingle} />
            </div>
            <div className='container--column-wide container-directionColumn'>
                <ContainerModifiersToAdd
                    toAddStart={toAddStart}
                    updateToAddStart={updateToAddStart}
                    toAddEnd={toAddEnd}
                    updateToAddEnd={updateToAddEnd} />
                <ContainerModifiersInputs
                    replace={replace}
                    updateReplace={updateReplace}
                    removeDiacritics={removeDiacritics}
                    updateRemoveDiacritics={updateRemoveDiacritics}
                    removeEmptyPhrases={removeEmptyPhrases}
                    updateRemoveEmptyPhrases={updateRemoveEmptyPhrases}
                    caps={caps}
                    updateCaps={updateCaps} />
            </div>
        </div>
    )
}

ContainerModifiers.propTypes = {
    divider: PropTypes.string,
    updateDivider: PropTypes.func,
    connector: PropTypes.string,
    updateConnector: PropTypes.func,
    toRemoveStartEnd: PropTypes.string,
    updateToRemoveStartEnd: PropTypes.func,
    toRemoveEntireString: PropTypes.string,
    updateToRemoveEntireString: PropTypes.func,
    toRemoveEntireSingle: PropTypes.string,
    updateToRemoveEntireSingle: PropTypes.func,
    toAddStart: PropTypes.string,
    updateToAddStart: PropTypes.func,
    toAddEnd: PropTypes.string,
    updateToAddEnd: PropTypes.func,
    replace: PropTypes.bool,
    updateReplace: PropTypes.func,
    removeDiacritics: PropTypes.bool,
    updateRemoveDiacritics: PropTypes.func,
    removeEmptyPhrases: PropTypes.bool,
    updateRemoveEmptyPhrases: PropTypes.func,
    caps: PropTypes.string,
    updateCaps: PropTypes.func
}

export default ContainerModifiers;
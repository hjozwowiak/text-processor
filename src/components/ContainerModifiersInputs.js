import React from 'react';
import PropTypes from 'prop-types';
import InputCheckbox from './InputCheckbox';
import InputRadio from './InputRadio';
import '../style/ContainerModifiersInputs.scss';

const ContainerModifiersInputs = ({replace, updateReplace, removeDiacritics, updateRemoveDiacritics, removeEmptyPhrases, updateRemoveEmptyPhrases, caps, updateCaps}) => {
    return(
        <div className='ContainerModifiersInputs'>
            <InputCheckbox
                description='Replace characters'
                replace={replace}
                callbackValue={updateReplace} />
            <InputCheckbox
                description='Remove diacritics'
                removeDiacritics={removeDiacritics}
                callbackValue={updateRemoveDiacritics} />
            <InputCheckbox
                description='Remove empty phrases'
                removeEmptyPhrases={removeEmptyPhrases}
                callbackValue={updateRemoveEmptyPhrases} />
            <hr />
            <InputRadio
                descriptions={['Upper caps', 'Lower caps']}
                number='2'
                name='caps'
                caps={caps}
                callbackValue={updateCaps} />
        </div>
    )
}

ContainerModifiersInputs.propTypes = {
    replace: PropTypes.bool,
    updateReplace: PropTypes.func,
    removeDiacritics: PropTypes.bool,
    updateRemoveDiacritics: PropTypes.func,
    removeEmptyPhrases: PropTypes.bool,
    updateRemoveEmptyPhrases: PropTypes.func,
    caps: PropTypes.string,
    updateCaps: PropTypes.func
}

export default ContainerModifiersInputs;
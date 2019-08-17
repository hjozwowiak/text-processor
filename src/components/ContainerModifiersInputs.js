import React from 'react';
import InputCheckbox from './InputCheckbox';
import InputRadio from './InputRadio';
import '../style/ContainerModifiersInputs.scss';

const ContainerModifiersInputs = props => {
    return(
        <div className='ContainerModifiersInputs'>
            <InputCheckbox
                description='Replace characters'
                replace={props.replace}
                callbackValue={props.updateReplace} />
            <InputCheckbox
                description='Remove diacritics'
                removeDiacritics={props.removeDiacritics}
                callbackValue={props.updateRemoveDiacritics} />
            <InputCheckbox
                description='Remove empty phrases'
                removeEmptyPhrases={props.removeEmptyPhrases}
                callbackValue={props.updateRemoveEmptyPhrases} />
            <hr />
            <InputRadio
                descriptions={['Upper caps', 'Lower caps']}
                number='2'
                name='caps'
                caps={props.caps}
                callbackValue={props.updateCaps} />
        </div>
    )
}

export default ContainerModifiersInputs;
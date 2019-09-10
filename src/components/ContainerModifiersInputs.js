import React from 'react';
import PropTypes from 'prop-types';
import InputCheckbox from './InputCheckbox';
import InputRadio from './InputRadio';
import TextArea from './TextArea';

const ContainerModifiersInputs = ({replace, updateReplace, toReplace, updateToReplace, toReplaceWith, updateToReplaceWith, removeDiacritics, updateRemoveDiacritics, removeEmptyPhrases, updateRemoveEmptyPhrases, letterCase, updateLetterCase}) => {
    let hideReplaceTextArea;
    if(replace) {
        hideReplaceTextArea = '';
    } else {
        hideReplaceTextArea = 'hide ';
    }

    return(
        <div className='container--section-withContent container-directionColumn container-borderRoundTopLeftMedium container-borderRoundTopRightMedium container-borderRoundBottomRightMedium container-borderRoundBottomLeftMedium'>
            <InputCheckbox
                targetClasses={['input--checkbox']}
                description='Replace characters'
                replace={replace}
                callbackValue={updateReplace} />
            <div className={`${hideReplaceTextArea}container--section`}>
                <TextArea
                    targetClasses={['input--textarea-small','container-borderRoundTopLeftSmall','container-borderRoundBottomLeftSmall']}
                    toReplace={toReplace}
                    callbackValue={updateToReplace} />
                <TextArea
                    targetClasses={['input--textarea-small','container-borderRoundTopRightSmall','container-borderRoundBottomRightSmall']}
                    toReplaceWith={toReplaceWith}
                    callbackValue={updateToReplaceWith} />
            </div>
            <InputCheckbox
                targetClasses={['input--checkbox']}
                description='Remove diacritics'
                removeDiacritics={removeDiacritics}
                callbackValue={updateRemoveDiacritics} />
            <InputCheckbox
                targetClasses={['input--checkbox']}
                description='Remove empty phrases'
                removeEmptyPhrases={removeEmptyPhrases}
                callbackValue={updateRemoveEmptyPhrases} />
            <hr />
            <InputRadio
                targetClasses={['input--radio']}
                descriptions={['Upper case', 'Lower case']}
                number='2'
                name='letterCase'
                letterCase={letterCase}
                callbackValue={updateLetterCase} />
        </div>
    )
}

ContainerModifiersInputs.propTypes = {
    replace: PropTypes.bool,
    updateReplace: PropTypes.func,
    toReplace: PropTypes.string,
    updateToReplace: PropTypes.func,
    toReplaceWith: PropTypes.string,
    updateToReplaceWith: PropTypes.func,
    removeDiacritics: PropTypes.bool,
    updateRemoveDiacritics: PropTypes.func,
    removeEmptyPhrases: PropTypes.bool,
    updateRemoveEmptyPhrases: PropTypes.func,
    letterCase: PropTypes.string,
    updateLetterCase: PropTypes.func
}

export default ContainerModifiersInputs;
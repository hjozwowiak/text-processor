import React from 'react';
import PropTypes from 'prop-types';
import TextAreaPassive from './TextAreaPassive';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContainerOutputTrigger = ({output, runMod, undo, redo}) => {
    return(
        <div className='container--row'>
            <div className="container--section">
                <TextAreaPassive
                    targetClasses={['input--textarea-large','container-borderRoundTopLeftLarge','container-borderRoundTopRightLarge','container-borderRoundBottomRightLarge']}
                    value={output}
                    placeholder='Output' />
                <div className="container--section-button">
                    <Button
                        targetClasses={['input--button']}
                        description='convert'
                        trigger={runMod} />
                    <Button
                        targetClasses={['buttonUndo', 'input--button','input--button-inactive']}
                        description={<FontAwesomeIcon icon="arrow-circle-left" />}
                        trigger={undo} />
                    <Button
                        targetClasses={['buttonRedo', 'input--button','input--button-inactive','container-borderRoundTopRightSmall']}
                        description={<FontAwesomeIcon icon="arrow-circle-right" />}
                        trigger={redo} />
                </div>
            </div>
        </div>
    );
}

ContainerOutputTrigger.propTypes = {
    output: PropTypes.string,
    runMod: PropTypes.func,
    undo: PropTypes.func,
    redo: PropTypes.func
}

export default ContainerOutputTrigger;
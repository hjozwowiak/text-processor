import React from 'react';
import PropTypes from 'prop-types';
import TextAreaPassive from './TextAreaPassive';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContainerOutputTrigger = ({output, runMod}) => {
    return(
        <div className='container--row'>
            <div className="container--section">
                <TextAreaPassive
                    targetClasses={['input--textarea-large','container-borderRoundTopLeftLarge','container-borderRoundTopRightLarge','container-borderRoundBottomRightLarge']}
                    value={output} />
                <div className="container--section-button">
                    <Button
                        targetClasses={['input--button']}
                        description='convert'
                        trigger={runMod} />
                    <Button
                        targetClasses={['input--button','input--button-inactive']}
                        description={<FontAwesomeIcon icon="arrow-circle-left" />} />
                    <Button
                        targetClasses={['input--button','input--button-inactive','container-borderRoundTopRightSmall']}
                        description={<FontAwesomeIcon icon="arrow-circle-right" />} />
                </div>
            </div>
        </div>
    );
}

ContainerOutputTrigger.propTypes = {
    output: PropTypes.string,
    runMod: PropTypes.func
}

export default ContainerOutputTrigger;
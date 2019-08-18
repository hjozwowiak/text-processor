import React from 'react';
import PropTypes from 'prop-types';
import TextAreaPassive from './TextAreaPassive';
import Button from './Button';
import '../style/ContainerOutputTrigger.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContainerOutputTrigger = ({output, runMod}) => {
    return(
        <div className="ContainerOutputTrigger">
            <TextAreaPassive
                value={output} />
            <div className="buttonContainer">
                <Button
                    additionalClass='button--variant-convert'
                    description='convert'
                    trigger={runMod} />
                <Button
                    additionalClass='button--variant-left'
                    description={<FontAwesomeIcon icon="arrow-circle-left" />} />
                <Button
                    additionalClass='button--variant-right'
                    description={<FontAwesomeIcon icon="arrow-circle-right" />} />
            </div>
        </div>
    );
}

ContainerOutputTrigger.propTypes = {
    output: PropTypes.string,
    runMod: PropTypes.func
}

export default ContainerOutputTrigger;
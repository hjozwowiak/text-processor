import React from 'react';
import TextAreaPassive from './TextAreaPassive';
import Button from './Button';
import '../style/ContainerOutputTrigger.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContainerOutputTrigger = props => {
    return(
        <div className="ContainerOutputTrigger">
            <TextAreaPassive
                value={props.output} />
            <div className="buttonContainer">
                <Button
                    additionalClass='button--variant-convert'
                    description='convert'
                    trigger={props.runMod} />
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

export default ContainerOutputTrigger;
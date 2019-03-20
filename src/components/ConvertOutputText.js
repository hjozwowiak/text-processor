import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ConvertOutputText = props => {

    return(
        <div className="textOutputContainer">
            <textarea />
            <div className="buttonContainer">
                <div className="button button--variant-convert">convert</div>
                <div className="button button--variant-left">
                    <FontAwesomeIcon icon="arrow-circle-left" />
                </div>
                <div className="button button--variant-right">
                    <FontAwesomeIcon icon="arrow-circle-right" />
                </div>
            </div>
        </div>
    );
}

export default ConvertOutputText;
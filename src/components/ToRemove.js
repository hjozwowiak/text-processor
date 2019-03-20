import React, {Component} from 'react';

class ToRemove extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="toRemoveContainer">
                <textarea className="toRemoveTextArea toRemoveTextArea--variant-startEnd" />
                <textarea className="toRemoveTextArea toRemoveTextArea--variant-entire" />
                <textarea className="toRemoveTextArea toRemoveTextArea--variant-entireSingle" />
            </div>
        )
    }
}

export default ToRemove;
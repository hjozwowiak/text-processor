import React, {Component} from 'react';

class ToAdd extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="toAddContainer">
                <textarea className="toAddTextArea toAddTextArea--variant-start" />
                <textarea className="toAddTextArea toAddTextArea--variant-end" />
            </div>
        )
    }
}

export default ToAdd;
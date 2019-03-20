import React, {Component} from 'react';

class Dividers extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="dividersContainer">
                <textarea className="dividersTextArea dividersTextArea--variant-divider" />
                <textarea className="dividersTextArea dividersTextArea--variant-connector" />
            </div>
        )
    }
}

export default Dividers;
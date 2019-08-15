import React, {Component} from 'react';

class InputTextOld extends Component {

    constructor(props) {
        super(props);
        this.state = { input: '' };
    }

    render() {
        return(
            <div className="textInputContainer">
                <textarea
                    value={this.state.input}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(input) {
        this.setState({input});
    }
}

export default InputTextOld;
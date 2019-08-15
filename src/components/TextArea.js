import React, {Component} from 'react';
import '../style/TextArea.scss';

class TextArea extends Component {
    state = {
        value: ''
    };

    render() {
        const {value} = this.state;
        const {targetClass, callbackValue} = this.props;

        const handleChange = event => {
            if(callbackValue) {callbackValue(event.target.value)};
            this.setState({value: event.target.value});
        }

        return(
            <textarea
                className={targetClass}
                value={value}
                onChange={handleChange}
                />
        );
    }
}

export default TextArea;
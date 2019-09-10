import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
    state = {
        value: ''
    };

    render() {
        const {value} = this.state;
        const {targetClasses, callbackValue} = this.props;
        let classes = '';
        if(targetClasses) { classes = targetClasses.join(' ') };

        const handleChange = event => {
            if(callbackValue) {callbackValue(event.target.value)};
            this.setState({value: event.target.value});
        }

        const handleKeyDown = event => {
            if(event.key === 'Tab') {
                event.preventDefault();
                this.setState({value: value.substring(0, event.target.selectionStart) + '\t' + value.substring(event.target.selectionEnd)})
            }
        }

        return(
            <textarea
                className={classes}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                />
        );
    }
}

TextArea.propTypes = {
    targetClasses: PropTypes.array,
    callbackValue: PropTypes.func
}

export default TextArea;
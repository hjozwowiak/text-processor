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

        return(
            <textarea
                className={classes}
                value={value}
                onChange={handleChange}
                />
        );
    }
}

TextArea.propTypes = {
    targetClasses: PropTypes.array,
    callbackValue: PropTypes.func
}

export default TextArea;
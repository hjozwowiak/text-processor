import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends Component {
    state = { checked: false };

    render() {
        const {checked} = this.state;
        const {targetClasses, description, callbackValue} = this.props;
        let classes = '';
        if(targetClasses) { classes = targetClasses.join(' ') };

        const handleChange = event => {
            if(callbackValue) {callbackValue(event.target.checked)};
            this.setState({checked: event.target.checked})
        }

        return(
            <div className={classes}>
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={handleChange}
                    />
                <span>{description}</span>
            </div>
        )
    }
}

InputCheckbox.propTypes = {
    targetClasses: PropTypes.array,
    description: PropTypes.string,
    callbackValue: PropTypes.func
}

InputCheckbox.defaultProps = {
    targetClass: ''
}

export default InputCheckbox;
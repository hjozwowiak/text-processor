import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../style/InputCheckbox.scss';

class InputCheckbox extends Component {
    state = { checked: false };

    render() {
        const {checked} = this.state;
        const {description, targetClass, callbackValue} = this.props;

        const handleChange = event => {
            if(callbackValue) {callbackValue(event.target.checked)};
            this.setState({checked: event.target.checked})
        }

        return(
            <div className={`InputCheckbox ${targetClass}`}>
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
    description: PropTypes.string,
    targetClass: PropTypes.string,
    callbackValue: PropTypes.func
}

InputCheckbox.defaultProps = {
    targetClass: ''
}

export default InputCheckbox;
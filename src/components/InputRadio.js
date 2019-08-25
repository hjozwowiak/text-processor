import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputRadio extends Component {
    state = { selected: '' };

    render() {
        const {selected} = this.state;
        const {targetClasses, number, descriptions, name, callbackValue} = this.props;
        let classes = '';
        if(targetClasses) { classes = targetClasses.join(' ') };

        const handleChange = event => {
            if(callbackValue) {callbackValue(event.target.value)};
            this.setState({selected: event.target.value});
        }

        const result = [];

        for(let i = 0; i < number; i++) {
            result.push(
                <div className={classes} key={`${name}-${i}`} >
                    <input
                        type='radio'
                        name={name}
                        value={`${name}-${i}`}
                        selected={selected === `${name}-${i}`}
                        onChange={handleChange} />
                    <span>{descriptions[i]}</span>
                </div>
            );
        }

        return(
            <div>
                {result}
            </div>
        )
    }
}

InputRadio.propTypes = {
    targetClasses: PropTypes.array,
    descriptions: PropTypes.array,
    callbackValue: PropTypes.func
}

InputRadio.defaultProps = {
    targetClass: ''
}

export default InputRadio;
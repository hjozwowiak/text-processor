import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../style/InputRadio.scss';

class InputRadio extends Component {
    state = { selected: '' };

    render() {
        const {selected} = this.state;
        const {number, descriptions, name, targetClass, callbackValue} = this.props;

        const handleChange = event => {
            if(callbackValue) {callbackValue(event.target.value)};
            this.setState({selected: event.target.value});
        }

        const result = [];

        for(let i = 0; i < number; i++) {
            result.push(
                <div className={`InputRadio ${targetClass}`} key={`${name}-${i}`} >
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
    descriptions: PropTypes.array,
    targetClass: PropTypes.string,
    callbackValue: PropTypes.func
}

InputRadio.defaultProps = {
    targetClass: ''
}

export default InputRadio;
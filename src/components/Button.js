import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    state = {};

    render() {
        const {additionalClass, description, trigger} = this.props;

        return(
            <div
                className={`button ${additionalClass}`}
                onClick={trigger} >
                {description}
            </div>
        )
    }
}

Button.propTypes = {
    additionalClass: PropTypes.string,
    description: PropTypes.node,
    trigger: PropTypes.func
}

export default Button;
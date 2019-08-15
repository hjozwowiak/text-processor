import React, {Component} from 'react';

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

export default Button;
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    state = {};

    render() {
        const {targetClasses, description, trigger} = this.props;
        let classes = '';
        if(targetClasses) { classes = targetClasses.join(' ') };

        return(
            <div
                className={classes}
                onClick={trigger} >
                {description}
            </div>
        )
    }
}

Button.propTypes = {
    targetClasses: PropTypes.array,
    description: PropTypes.node,
    trigger: PropTypes.func
}

export default Button;
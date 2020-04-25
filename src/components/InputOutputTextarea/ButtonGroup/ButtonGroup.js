import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./ButtonGroup.scss";

const ButtonGroup = ({ runMod, undo, redo }) => {
  return (
    <div className="buttonGroup">
      <div
        className="buttonGroup__button buttonGroup__buttonRun --rounded-s-bl"
        onClick={runMod}
      >
        Convert
      </div>
      <div
        className="buttonGroup__button buttonGroup__buttonUndo __button--inactive"
        onClick={undo}
      >
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </div>
      <div
        className="buttonGroup__button buttonGroup__buttonRedo --rounded-s-tr __button--inactive"
        onClick={redo}
      >
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  runMod: PropTypes.func,
  undo: PropTypes.func,
  redo: PropTypes.func,
};

export default ButtonGroup;

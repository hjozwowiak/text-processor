import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ButtonGroup.scss";

const ButtonGroup = () => {
  return (
    <div className="buttonGroup">
      <div className="buttonGroup__button buttonGroup__buttonRun --rounded-s-bl">
        Convert
      </div>
      <div className="buttonGroup__button buttonGroup__buttonUndo __button--inactive">
        <FontAwesomeIcon icon="arrow-circle-left" />
      </div>
      <div className="buttonGroup__button buttonGroup__buttonRedo --rounded-s-tr __button--inactive">
        <FontAwesomeIcon icon="arrow-circle-right" />
      </div>
    </div>
  );
};

export default ButtonGroup;

import React from "react";
import PropTypes from "prop-types";

import FirstColumn from "./FirstColumn/FirstColumn";
import SecondColumn from "./SecondColumn/SecondColumn";

import "./Modifiers.scss";

const Modifiers = () => {
  return (
    <div className="modifiers">
      <FirstColumn />
      <SecondColumn />
    </div>
  );
};

export default Modifiers;

import React, { Component } from "react";

import InputOutputTextarea from "../InputOutputTextarea/InputOutputTextarea";
import Modifiers from "../Modifiers/Modifiers";

import "./LayoutTest.scss";

class LayoutTest extends Component {
  render() {
    return (
      <div className="App">
        <div className="appContainer">
          <InputOutputTextarea
            type="input"
            placeholder="Input"
            classes="--rounded-l-tr --rounded-l-bl --rounded-l-tl"
          />
          <Modifiers />
          <InputOutputTextarea
            type="output"
            placeholder="Output"
            classes="--rounded-l-tr --rounded-s-bl --rounded-l-tl"
          />
        </div>
      </div>
    );
  }
}

export default LayoutTest;

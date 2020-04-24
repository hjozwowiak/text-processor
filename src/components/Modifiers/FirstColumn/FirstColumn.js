import React from "react";
import PropTypes from "prop-types";

import InputGroup from "../../InputGroup/InputGroup";

const FirstColumn = () => {
  return (
    <div className="modifiers modifiers__column modifiers__firstColumn">
      <InputGroup classes="inputGroup--alignRow modifiers__inputGroup">
        <textarea className="__inputText inputGroup__inputText --border-r --rounded-m-bl --rounded-m-tl" />
        <textarea className="__inputText inputGroup__inputText --border-l --rounded-m-tr --rounded-m-br" />
      </InputGroup>
      <InputGroup classes="inputGroup--alignColumn modifiers__inputGroup">
        <input
          type="text"
          className="__inputText inputGroup__inputText --border-b --rounded-m-tr --rounded-m-tl"
        ></input>
        <input
          type="text"
          className="__inputText inputGroup__inputText --border-tb"
        ></input>
        <input
          type="text"
          className="__inputText inputGroup__inputText --border-t --rounded-m-br --rounded-m-bl"
        ></input>
      </InputGroup>
    </div>
  );
};

export default FirstColumn;

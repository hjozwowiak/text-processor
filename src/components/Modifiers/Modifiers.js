import React from "react";
import PropTypes from "prop-types";

import InputGroup from "../InputGroup/InputGroup";

import "./Modifiers.scss";

const Modifiers = () => {
  return (
    <div className="modifiers">
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

      <div className="modifiers modifiers__column modifiers__secondColumn">
        <InputGroup classes="inputGroup--alignRow modifiers__inputGroup">
          <textarea className="__inputText inputGroup__inputText --border-r --rounded-m-bl --rounded-m-tl" />
          <textarea className="__inputText inputGroup__inputText --border-l --rounded-m-tr --rounded-m-br" />
        </InputGroup>
        <InputGroup classes="inputGroup--alignColumn modifiers__inputGroup modifiers__inputGroup--white --rounded-m-tr --rounded-m-br --rounded-m-bl --rounded-m-tl">
          <div className="inputGroup__inputLine">
            <input type="checkbox" />
            <span>Remove diacritics</span>
          </div>
          <div className="inputGroup__inputLine">
            <input type="checkbox" />
            <span>Remove empty phrases</span>
          </div>
          <div className="inputGroup__inputLine">
            <input type="checkbox" />
            <span>Replace characters</span>
            <InputGroup
              classes="inputGroup--alignRow --rounded-s-tr --rounded-s-br --rounded-s-bl --rounded-s-tl --hidden"
              type="small"
            >
              <textarea className="__inputText inputGroup__inputTextSmall --border-r --rounded-s-bl --rounded-s-tl" />
              <textarea className="__inputText inputGroup__inputTextSmall --border-l --rounded-s-tr --rounded-s-br" />
            </InputGroup>
          </div>
          <hr className="modifiers__separator" />
          <div className="inputGroup__inputLine">
            <input type="radio" />
            <span>Upper case</span>
          </div>
          <div className="inputGroup__inputLine">
            <input type="radio" />
            <span>Lower case</span>
          </div>
        </InputGroup>
      </div>
    </div>
  );
};

export default Modifiers;

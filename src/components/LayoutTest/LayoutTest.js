import React from "react";

import InputOutputTextarea from "../InputOutputTextarea/InputOutputTextarea";

import "./LayoutTest.scss";

const LayoutTest = () => {
  return (
    <div className="App">
      <div className="appContainer">
        <InputOutputTextarea
          type="input"
          placeholder="Input"
          classes="--rounded-l-tr --rounded-l-bl --rounded-l-tl"
        />
        <div className="modifiers">
          <div className="modifiers modifiers__column modifiers__leftColumn">
            <div className="inputGroup inputGroup--alignRow modifiers__inputGroup">
              <textarea className="__inputText inputGroup__inputText --border-r --rounded-m-bl --rounded-m-tl" />
              <textarea className="__inputText inputGroup__inputText --border-l --rounded-m-tr --rounded-m-br" />
            </div>
            <div className="inputGroup inputGroup--alignColumn modifiers__inputGroup">
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
            </div>
          </div>

          <div className="modifiers modifiers__column modifiers__rightColumn">
            <div className="inputGroup inputGroup--alignRow modifiers__inputGroup">
              <textarea className="__inputText inputGroup__inputText --border-r --rounded-m-bl --rounded-m-tl" />
              <textarea className="__inputText inputGroup__inputText --border-l --rounded-m-tr --rounded-m-br" />
            </div>
            <div className="inputGroup inputGroup--alignColumn modifiers__inputGroup modifiers__inputGroup--white --rounded-m-tr --rounded-m-br --rounded-m-bl --rounded-m-tl">
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
                <div className="inputGroupSmall inputGroup--alignRow --rounded-s-tr --rounded-s-br --rounded-s-bl --rounded-s-tl --hidden">
                  <textarea className="__inputText inputGroup__inputTextSmall --border-r --rounded-s-bl --rounded-s-tl" />
                  <textarea className="__inputText inputGroup__inputTextSmall --border-l --rounded-s-tr --rounded-s-br" />
                </div>
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
            </div>
          </div>
        </div>

        <InputOutputTextarea
          type="output"
          placeholder="Output"
          classes="--rounded-l-tr --rounded-s-bl --rounded-l-tl"
        />
      </div>
    </div>
  );
};

export default LayoutTest;

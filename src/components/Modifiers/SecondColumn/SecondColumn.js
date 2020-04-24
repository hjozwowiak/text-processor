import React from "react";
import PropTypes from "prop-types";

import InputGroup from "../../InputGroup/InputGroup";
import Checkbox from "../../Inputs/Checkbox/Checkbox";
import Radio from "../../Inputs/Radio/Radio";

const SecondColumn = () => {
  return (
    <div className="modifiers modifiers__column modifiers__secondColumn">
      <InputGroup classes="inputGroup--alignRow modifiers__inputGroup">
        <textarea className="__inputText inputGroup__inputText --border-r --rounded-m-bl --rounded-m-tl" />
        <textarea className="__inputText inputGroup__inputText --border-l --rounded-m-tr --rounded-m-br" />
      </InputGroup>
      <InputGroup classes="inputGroup--alignColumn modifiers__inputGroup modifiers__inputGroup--white --rounded-m-tr --rounded-m-br --rounded-m-bl --rounded-m-tl">
        <Checkbox
          classes="inputGroup__inputLine"
          description="Remove diacritics"
        />
        <Checkbox
          classes="inputGroup__inputLine"
          description="Remove empty phrases"
        />
        <Checkbox
          classes="inputGroup__inputLine"
          description="Replace characters"
        >
          <InputGroup
            classes="inputGroup--alignRow --rounded-s-tr --rounded-s-br --rounded-s-bl --rounded-s-tl --hidden"
            type="small"
          >
            <textarea className="__inputText inputGroup__inputTextSmall --border-r --rounded-s-bl --rounded-s-tl" />
            <textarea className="__inputText inputGroup__inputTextSmall --border-l --rounded-s-tr --rounded-s-br" />
          </InputGroup>
        </Checkbox>
        <hr className="modifiers__separator" />
        <Radio
          classes="inputGroup__inputLine"
          name="letterCase"
          description="Upper case"
        />
        <Radio
          classes="inputGroup__inputLine"
          name="letterCase"
          description="Lower case"
        />
      </InputGroup>
    </div>
  );
};

export default SecondColumn;

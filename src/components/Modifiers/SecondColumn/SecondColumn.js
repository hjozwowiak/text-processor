import React from "react";
import PropTypes from "prop-types";

import InputGroup from "../../InputGroup/InputGroup";
import TextArea from "../../Inputs/TextArea/TextArea";
import Checkbox from "../../Inputs/Checkbox/Checkbox";
import Radio from "../../Inputs/Radio/Radio";

const SecondColumn = ({
  toAddStart,
  newToAddStart,
  toAddEnd,
  newToAddEnd,
  removeDiacritics,
  newRemoveDiacritics,
  removeEmptyPhrases,
  newRemoveEmptyPhrases,
  replace,
  updateReplace,
  toReplace,
  newToReplace,
  toReplaceWith,
  newToReplaceWith,
  letterCase,
  newLetterCase,
}) => {
  return (
    <div className="modifiers modifiers__column modifiers__secondColumn">
      <InputGroup classes="inputGroup--alignRow modifiers__inputGroup">
        <TextArea
          classes="__inputText inputGroup__inputText --border-r --rounded-m-bl --rounded-m-tl"
          placeholder="To remove at the BEGINNING"
          value={toAddStart}
          newValue={newToAddStart}
        />
        <TextArea
          classes="__inputText inputGroup__inputText --border-l --rounded-m-tr --rounded-m-br"
          placeholder="To remove at the BEGINNING"
          value={toAddEnd}
          newValue={newToAddEnd}
        />
      </InputGroup>
      <InputGroup classes="inputGroup--alignColumn modifiers__inputGroup modifiers__inputGroup--white --rounded-m-tr --rounded-m-br --rounded-m-bl --rounded-m-tl">
        <Checkbox
          classes="inputGroup__inputLine"
          description="Remove diacritics"
          value={removeDiacritics}
          newValue={newRemoveDiacritics}
        />
        <Checkbox
          classes="inputGroup__inputLine"
          description="Remove empty phrases"
          value={removeEmptyPhrases}
          newValue={newRemoveEmptyPhrases}
        />
        <Checkbox
          classes="inputGroup__inputLine"
          description="Replace characters"
          value={replace}
          newValue={updateReplace}
        >
          <InputGroup
            classes={`inputGroup--alignRow --rounded-s-tr --rounded-s-br --rounded-s-bl --rounded-s-tl${
              !replace ? " --hidden" : ""
            }`}
            type="small"
          >
            <TextArea
              classes="__inputText inputGroup__inputTextSmall --border-r --rounded-s-bl --rounded-s-tl"
              placeholder="Replace THIS"
              value={toReplace}
              newValue={newToReplace}
            />
            <TextArea
              classes="__inputText inputGroup__inputTextSmall --border-l --rounded-s-tr --rounded-s-br"
              placeholder="With THIS"
              value={toReplaceWith}
              newValue={newToReplaceWith}
            />
          </InputGroup>
        </Checkbox>
        <hr className="modifiers__separator" />
        <Radio
          classes={"inputGroup__inputLine"}
          descriptions={["Upper case", "Lower case"]}
          number={2}
          name="letterCase"
          selected={letterCase}
          newSelected={newLetterCase}
        />
      </InputGroup>
    </div>
  );
};

SecondColumn.propTypes = {
  toAddStart: PropTypes.string,
  newToAddStart: PropTypes.func,
  toAddEnd: PropTypes.string,
  newToAddEnd: PropTypes.func,
  removeDiacritics: PropTypes.bool,
  newRemoveDiacritics: PropTypes.func,
  removeEmptyPhrases: PropTypes.bool,
  newRemoveEmptyPhrases: PropTypes.func,
  replace: PropTypes.bool,
  updateReplace: PropTypes.func,
  toReplace: PropTypes.string,
  newToReplace: PropTypes.func,
  toReplaceWith: PropTypes.string,
  newToReplaceWith: PropTypes.func,
  letterCase: PropTypes.string,
  newLetterCase: PropTypes.func,
};

export default SecondColumn;

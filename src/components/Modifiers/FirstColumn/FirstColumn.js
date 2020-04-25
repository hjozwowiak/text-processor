import React from "react";
import PropTypes from "prop-types";

import InputGroup from "../../InputGroup/InputGroup";
import TextArea from "../../Inputs/TextArea/TextArea";

const FirstColumn = ({
  divider,
  newDivider,
  connector,
  newConnector,
  toRemoveStartEnd,
  newToRemoveStartEnd,
  toRemoveEntireString,
  newToRemoveEntireString,
  toRemoveEntireSingle,
  newToRemoveEntireSingle,
}) => {
  return (
    <div className="modifiers modifiers__column modifiers__firstColumn">
      <InputGroup classes="inputGroup--alignRow modifiers__inputGroup">
        <TextArea
          classes="__inputText inputGroup__inputText --border-r --rounded-m-bl --rounded-m-tl"
          placeholder="Divider"
          value={divider}
          newValue={newDivider}
        />
        <TextArea
          classes="__inputText inputGroup__inputText --border-l --rounded-m-tr --rounded-m-br"
          placeholder="Connector"
          value={connector}
          newValue={newConnector}
        />
      </InputGroup>
      <InputGroup classes="inputGroup--alignColumn modifiers__inputGroup">
        <TextArea
          placeholder="Remove at the BEGINNING and END"
          classes={
            "__inputText inputGroup__inputText --border-b --rounded-m-tr --rounded-m-tl"
          }
          value={toRemoveStartEnd}
          newValue={newToRemoveStartEnd}
        />
        <TextArea
          placeholder="Remove every occurrence of a given phrase"
          classes={"__inputText inputGroup__inputText --border-tb"}
          value={toRemoveEntireString}
          newValue={newToRemoveEntireString}
        />
        <TextArea
          placeholder="Remove every occurrence of given characters"
          classes={
            "__inputText inputGroup__inputText --border-t --rounded-m-br --rounded-m-bl"
          }
          value={toRemoveEntireSingle}
          newValue={newToRemoveEntireSingle}
        />
      </InputGroup>
    </div>
  );
};

FirstColumn.propTypes = {
  divider: PropTypes.string,
  newDivider: PropTypes.func,
  connector: PropTypes.string,
  newConnector: PropTypes.func,
  toRemoveStartEnd: PropTypes.string,
  newToRemoveStartEnd: PropTypes.func,
  toRemoveEntireString: PropTypes.string,
  newToRemoveEntireString: PropTypes.func,
  toRemoveEntireSingle: PropTypes.string,
  newToRemoveEntireSingle: PropTypes.func,
};

export default FirstColumn;

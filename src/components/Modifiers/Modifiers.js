import React from "react";
import PropTypes from "prop-types";

import FirstColumn from "./FirstColumn/FirstColumn";
import SecondColumn from "./SecondColumn/SecondColumn";

import "./Modifiers.scss";

const Modifiers = ({
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
  toAddStart,
  newToAddStart,
  toAddEnd,
  newToAddEnd,
  replace,
  updateReplace,
  toReplace,
  newToReplace,
  toReplaceWith,
  newToReplaceWith,
  removeDiacritics,
  newRemoveDiacritics,
  removeEmptyPhrases,
  newRemoveEmptyPhrases,
  letterCase,
  newLetterCase,
}) => {
  return (
    <div className="modifiers">
      <FirstColumn
        divider={divider}
        newDivider={newDivider}
        connector={connector}
        newConnector={newConnector}
        toRemoveStartEnd={toRemoveStartEnd}
        newToRemoveStartEnd={newToRemoveStartEnd}
        toRemoveEntireString={toRemoveEntireString}
        newToRemoveEntireString={newToRemoveEntireString}
        toRemoveEntireSingle={toRemoveEntireSingle}
        newToRemoveEntireSingle={newToRemoveEntireSingle}
      />
      <SecondColumn
        toAddStart={toAddStart}
        newToAddStart={newToAddStart}
        toAddEnd={toAddEnd}
        newToAddEnd={newToAddEnd}
        removeDiacritics={removeDiacritics}
        newRemoveDiacritics={newRemoveDiacritics}
        removeEmptyPhrases={removeEmptyPhrases}
        newRemoveEmptyPhrases={newRemoveEmptyPhrases}
        replace={replace}
        updateReplace={updateReplace}
        toReplace={toReplace}
        newToReplace={newToReplace}
        toReplaceWith={toReplaceWith}
        newToReplaceWith={newToReplaceWith}
        letterCase={letterCase}
        newLetterCase={newLetterCase}
      />
    </div>
  );
};

Modifiers.propTypes = {
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

export default Modifiers;

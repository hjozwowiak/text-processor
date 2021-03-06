import React, { Component } from "react";
import removeAccents from "remove-accents";

import InputOutputTextarea from "../InputOutputTextarea/InputOutputTextarea";
import Modifiers from "../Modifiers/Modifiers";

import "./App.scss";

class App extends Component {
  state = {
    history: [],
    revertedHistory: [],
    input: "",
    output: "",
    divider: "",
    connector: "",
    toRemoveStartEnd: "",
    toRemoveEntireString: "",
    toRemoveEntireSingle: "",
    toAddStart: "",
    toAddEnd: "",
    replace: false,
    toReplace: "",
    toReplaceWith: "",
    removeDiacritics: false,
    removeEmptyPhrases: false,
    letterCase: "",
  };

  render() {
    const {
      history,
      revertedHistory,
      input,
      output,
      divider,
      connector,
      toRemoveStartEnd,
      toRemoveEntireString,
      toRemoveEntireSingle,
      toAddStart,
      toAddEnd,
      replace,
      toReplace,
      toReplaceWith,
      removeDiacritics,
      removeEmptyPhrases,
      letterCase,
    } = this.state;

    const runMod = () => {
      this.setState({
        history: [...history, output],
        revertedHistory: [],
      });
      changeButtonActivity(
        document.querySelector(".buttonGroup__buttonUndo"),
        "active"
      );
      changeButtonActivity(
        document.querySelector(".buttonGroup__buttonRedo"),
        "inactive"
      );

      // Replace characters
      const inputReplaced = input.replace(
        RegExp(toReplace, "gi"),
        toReplaceWith
      );

      // Cut the input to single phrases (stored in an array) using the divider
      let phrasesArray = inputReplaced.split(divider);
      let elementsToRemove = [];

      for (let i = 0; i < phrasesArray.length; i++) {
        // Remove entire string from start/end
        const toRemoveStartRegex = new RegExp("^" + toRemoveStartEnd, "gi");
        const toRemoveEndRegex = new RegExp(toRemoveStartEnd + "$", "gi");
        phrasesArray[i] = phrasesArray[i].replace(toRemoveStartRegex, "");
        phrasesArray[i] = phrasesArray[i].replace(toRemoveEndRegex, "");

        // Remove entire string from phrase
        const toRemoveEntireStringRegex = new RegExp(
          toRemoveEntireString,
          "gi"
        );
        phrasesArray[i] = phrasesArray[i].replace(
          toRemoveEntireStringRegex,
          ""
        );

        // Remove single characters from phrase
        const toRemoveEntireSingleArray = toRemoveEntireSingle.split("");
        for (let j = 0; j < toRemoveEntireSingleArray.length; j++) {
          phrasesArray[i] = phrasesArray[i].replace(
            toRemoveEntireSingleArray[j],
            ""
          );
        }

        // Add entire string to start/end
        phrasesArray[i] = toAddStart + phrasesArray[i] + toAddEnd;

        // Save indexes of empty elements to an array (to remove them later)
        if (removeEmptyPhrases) {
          if (phrasesArray[i] === "" || !phrasesArray[i]) {
            elementsToRemove.push(i);
          }
        }
      }

      // Remove empty phrases (by saved earlier indexes - starting from the end)
      if (removeEmptyPhrases) {
        for (let i = elementsToRemove.length - 1; i >= 0; i--) {
          phrasesArray.splice(elementsToRemove[i], 1);
        }
      }

      let currentOutput = phrasesArray.join(connector);

      // Letter case
      if (letterCase === "letterCase-0") {
        currentOutput = currentOutput.toUpperCase();
      } else if (letterCase === "letterCase-1") {
        currentOutput = currentOutput.toLowerCase();
      }

      // Remove accents/diacritics
      if (removeDiacritics === true) {
        currentOutput = removeAccents(currentOutput);
      }

      this.setState({ output: currentOutput });
    };

    const undo = () => {
      if (history.length > 0) {
        let undoHistory = history;
        let lastUndoHistoryElement = undoHistory.pop();
        this.setState({
          output: lastUndoHistoryElement,
          history: undoHistory,
          revertedHistory: [...revertedHistory, output],
        });

        if (undoHistory.length === 0) {
          changeButtonActivity(
            document.querySelector(".buttonGroup__buttonUndo"),
            "inactive"
          );
        }
        changeButtonActivity(
          document.querySelector(".buttonGroup__buttonRedo"),
          "active"
        );
      }
    };

    const redo = () => {
      if (revertedHistory.length > 0) {
        let redoHistory = revertedHistory;
        let lastRedoHistoryElement = redoHistory.pop();
        this.setState({
          output: lastRedoHistoryElement,
          history: [...history, output],
          revertedHistory: redoHistory,
        });

        if (redoHistory.length === 0) {
          changeButtonActivity(
            document.querySelector(".buttonGroup__buttonRedo"),
            "inactive"
          );
        }
        changeButtonActivity(
          document.querySelector(".buttonGroup__buttonUndo"),
          "active"
        );
      }
    };

    const changeButtonActivity = (element, state) => {
      if (
        state === "active" &&
        element.classList.contains("__button--inactive")
      ) {
        element.classList.remove("__button--inactive");
      } else if (
        state === "inactive" &&
        !element.classList.contains("__button--inactive")
      ) {
        element.classList.add("__button--inactive");
      }
    };

    return (
      <div className="App">
        <div className="appContainer">
          <InputOutputTextarea
            type="input"
            placeholder="Input"
            classes="--rounded-l-tr --rounded-l-bl --rounded-l-tl"
            value={input}
            newValue={(value) => this.setState({ input: value })}
          />
          <Modifiers
            divider={divider}
            newDivider={(divider) => this.setState({ divider })}
            connector={connector}
            newConnector={(connector) => this.setState({ connector })}
            toRemoveStartEnd={toRemoveStartEnd}
            newToRemoveStartEnd={(toRemoveStartEnd) =>
              this.setState({ toRemoveStartEnd })
            }
            toRemoveEntireString={toRemoveEntireString}
            newToRemoveEntireString={(toRemoveEntireString) =>
              this.setState({ toRemoveEntireString })
            }
            toRemoveEntireSingle={toRemoveEntireSingle}
            newToRemoveEntireSingle={(toRemoveEntireSingle) =>
              this.setState({ toRemoveEntireSingle })
            }
            toAddStart={toAddStart}
            newToAddStart={(toAddStart) => this.setState({ toAddStart })}
            toAddEnd={toAddEnd}
            newToAddEnd={(toAddEnd) => this.setState({ toAddEnd })}
            removeDiacritics={removeDiacritics}
            newRemoveDiacritics={(removeDiacritics) =>
              this.setState({ removeDiacritics })
            }
            removeEmptyPhrases={removeEmptyPhrases}
            newRemoveEmptyPhrases={(removeEmptyPhrases) =>
              this.setState({ removeEmptyPhrases })
            }
            replace={replace}
            updateReplace={(replace) => this.setState({ replace })}
            toReplace={toReplace}
            newToReplace={(toReplace) => this.setState({ toReplace })}
            toReplaceWith={toReplaceWith}
            newToReplaceWith={(toReplaceWith) =>
              this.setState({ toReplaceWith })
            }
            letterCase={letterCase}
            newLetterCase={(letterCase) => this.setState({ letterCase })}
          />
          <InputOutputTextarea
            type="output"
            placeholder="Output"
            classes="--rounded-l-tr --rounded-s-bl --rounded-l-tl"
            value={output}
            newValue={(output) => this.setState({ output })}
            runMod={runMod}
            undo={undo}
            redo={redo}
          />
        </div>
      </div>
    );
  }
}

export default App;

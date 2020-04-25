import React, { Component } from "react";
import removeAccents from "remove-accents";
// Components
import ContainerInput from "./components/ContainerInput";
import ContainerModifiers from "./components/ContainerModifiers";
import ContainerOutputTrigger from "./components/ContainerOutputTrigger";
import LayoutTest from "./components/LayoutTest/LayoutTest";
// Styles
import "./style/App.scss";
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faArrowCircleLeft, faArrowCircleRight);

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
      changeButtonActivity(document.querySelector(".buttonUndo"), "active");
      changeButtonActivity(document.querySelector(".buttonRedo"), "inactive");

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
            document.querySelector(".buttonUndo"),
            "inactive"
          );
        }
        changeButtonActivity(document.querySelector(".buttonRedo"), "active");
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
            document.querySelector(".buttonRedo"),
            "inactive"
          );
        }
        changeButtonActivity(document.querySelector(".buttonUndo"), "active");
      }
    };

    const changeButtonActivity = (element, state) => {
      if (
        state === "active" &&
        element.classList.contains("input--button-inactive")
      ) {
        element.classList.remove("input--button-inactive");
      } else if (
        state === "inactive" &&
        !element.classList.contains("input--button-inactive")
      ) {
        element.classList.add("input--button-inactive");
      }
    };

    return (
      <div className="container--app">
        <div className="container-directionColumn container--app-content">
          <ContainerInput
            input={input}
            updateInput={(value) => this.setState({ input: value })}
          />
          <ContainerModifiers
            divider={divider}
            updateDivider={(divider) => this.setState({ divider })}
            connector={connector}
            updateConnector={(connector) => this.setState({ connector })}
            toRemoveStartEnd={toRemoveStartEnd}
            updateToRemoveStartEnd={(toRemoveStartEnd) =>
              this.setState({ toRemoveStartEnd })
            }
            toRemoveEntireString={toRemoveEntireString}
            updateToRemoveEntireString={(toRemoveEntireString) =>
              this.setState({ toRemoveEntireString })
            }
            toRemoveEntireSingle={toRemoveEntireSingle}
            updateToRemoveEntireSingle={(toRemoveEntireSingle) =>
              this.setState({ toRemoveEntireSingle })
            }
            toAddStart={toAddStart}
            updateToAddStart={(toAddStart) => this.setState({ toAddStart })}
            toAddEnd={toAddEnd}
            updateToAddEnd={(toAddEnd) => this.setState({ toAddEnd })}
            replace={replace}
            updateReplace={(replace) => this.setState({ replace })}
            toReplace={toReplace}
            updateToReplace={(toReplace) => this.setState({ toReplace })}
            toReplaceWith={toReplaceWith}
            updateToReplaceWith={(toReplaceWith) =>
              this.setState({ toReplaceWith })
            }
            removeDiacritics={removeDiacritics}
            updateRemoveDiacritics={(removeDiacritics) =>
              this.setState({ removeDiacritics })
            }
            removeEmptyPhrases={removeEmptyPhrases}
            updateRemoveEmptyPhrases={(removeEmptyPhrases) =>
              this.setState({ removeEmptyPhrases })
            }
            letterCase={letterCase}
            updateLetterCase={(letterCase) => this.setState({ letterCase })}
          />
          <ContainerOutputTrigger
            output={output}
            updateOutput={(output) => this.setState({ output })}
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

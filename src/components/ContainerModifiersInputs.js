import React from "react";
import PropTypes from "prop-types";
import InputCheckbox from "./InputCheckbox";
import InputRadio from "./InputRadio";
import TextArea from "./TextArea";

const ContainerModifiersInputs = ({
    replace,
    updateReplace,
    toReplace,
    updateToReplace,
    toReplaceWith,
    updateToReplaceWith,
    removeDiacritics,
    updateRemoveDiacritics,
    removeEmptyPhrases,
    updateRemoveEmptyPhrases,
    letterCase,
    updateLetterCase
}) => {
    let hideReplaceTextArea;
    if (replace) {
        hideReplaceTextArea = "";
    } else {
        hideReplaceTextArea = "hide";
    }

    return (
        <div className="container--section-withContent container-directionColumn container-borderRoundTopLeftMedium container-borderRoundTopRightMedium container-borderRoundBottomRightMedium container-borderRoundBottomLeftMedium">
            <InputCheckbox
                targetClasses={["input--checkbox"]}
                description="Replace characters"
                checked={replace}
                callbackValue={updateReplace}
            />
            <div className={`container--section ${hideReplaceTextArea}`}>
                <TextArea
                    targetClasses={[
                        "input--textarea-small",
                        "container-borderRoundTopLeftSmall",
                        "container-borderRoundBottomLeftSmall"
                    ]}
                    value={toReplace}
                    callbackValue={updateToReplace}
                    placeholder="Replace this"
                />
                <TextArea
                    targetClasses={[
                        "input--textarea-small",
                        "container-borderRoundTopRightSmall",
                        "container-borderRoundBottomRightSmall"
                    ]}
                    value={toReplaceWith}
                    callbackValue={updateToReplaceWith}
                    placeholder="With this"
                />
            </div>
            <InputCheckbox
                targetClasses={["input--checkbox"]}
                description="Remove diacritics"
                checked={removeDiacritics}
                callbackValue={updateRemoveDiacritics}
            />
            <InputCheckbox
                targetClasses={["input--checkbox"]}
                description="Remove empty phrases"
                checked={removeEmptyPhrases}
                callbackValue={updateRemoveEmptyPhrases}
            />
            <hr />
            <InputRadio
                targetClasses={["input--radio"]}
                descriptions={["Upper case", "Lower case"]}
                number="2"
                name="letterCase"
                selected={letterCase}
                callbackValue={updateLetterCase}
            />
        </div>
    );
};

ContainerModifiersInputs.propTypes = {
    replace: PropTypes.bool,
    updateReplace: PropTypes.func,
    toReplace: PropTypes.string,
    updateToReplace: PropTypes.func,
    toReplaceWith: PropTypes.string,
    updateToReplaceWith: PropTypes.func,
    removeDiacritics: PropTypes.bool,
    updateRemoveDiacritics: PropTypes.func,
    removeEmptyPhrases: PropTypes.bool,
    updateRemoveEmptyPhrases: PropTypes.func,
    letterCase: PropTypes.string,
    updateLetterCase: PropTypes.func
};

export default ContainerModifiersInputs;

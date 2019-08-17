import React, { Component } from 'react';
// Components
import ContainerInput from './components/ContainerInput';
import ContainerModifiers from './components/ContainerModifiers';
import ContainerOutputTrigger from './components/ContainerOutputTrigger';
// Styles
import './style/App.scss';
import './style/Dividers.scss';
import './style/ToRemove.scss';
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowCircleLeft, faArrowCircleRight);

class App extends Component {
  state = {
    input: '',
    output: '',
    divider: '',
    connector: '',
    toRemoveStartEnd: '',
    toRemoveEntireString: '',
    toRemoveEntireSingle: '',
    toAddStart: '',
    toAddEnd: '',
    replace: false,
    removeDiacritics: false,
    removeEmptyPhrases: false,
    caps: '',
    test: 'test1'
  }

  render() {
    const {input, output, divider, connector, toRemoveStartEnd, toRemoveEntireString, toRemoveEntireSingle, toAddStart, toAddEnd, replace, removeDiacritics, removeEmptyPhrases, caps} = this.state;

    const runMod = () => {
      let phrasesArray = input.split(divider);

      this.setState({output: phrasesArray.join(connector)});
    }

    return (
      <div className='App'>
        <ContainerInput
          input={input}
          updateInput={(value => this.setState({input: value}))} />
        <ContainerModifiers
          divider={divider}
          updateDivider={(divider => this.setState({divider}))}
          connector={connector}
          updateConnector={(connector => this.setState({connector}))}
          toRemoveStartEnd={toRemoveStartEnd}
          updateToRemoveStartEnd={(toRemoveStartEnd => this.setState({toRemoveStartEnd}))}
          toRemoveEntireString={toRemoveEntireString}
          updateToRemoveEntireString={(toRemoveEntireString => this.setState({toRemoveEntireString}))}
          toRemoveEntireSingle={toRemoveEntireSingle}
          updateToRemoveEntireSingle={(toRemoveEntireSingle => this.setState({toRemoveEntireSingle}))}
          toAddStart={toAddStart}
          updateToAddStart={(toAddStart => this.setState({toAddStart}))}
          toAddEnd={toAddEnd}
          updateToAddEnd={(toAddEnd => this.setState({toAddEnd}))}
          replace={replace}
          updateReplace={(replace => this.setState({replace}))}
          removeDiacritics={removeDiacritics}
          updateRemoveDiacritics={(removeDiacritics => this.setState({removeDiacritics}))}
          removeEmptyPhrases={removeEmptyPhrases}
          updateRemoveEmptyPhrases={(removeEmptyPhrases => this.setState({removeEmptyPhrases}))}
          caps={caps}
          updateCaps={(caps => this.setState({caps}))} />
        <ContainerOutputTrigger
          output={output}
          updateOutput={(output => this.setState({output}))}
          runMod={runMod} />
      </div>
    );
  }
}

export default App;

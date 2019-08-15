import React, { Component } from 'react';
// Components
import ContainerInput from './components/ContainerInput';
import ContainerModifiers from './components/ContainerModifiers';
import ContainerOutputTrigger from './components/ContainerOutputTrigger';
// Styles
import './style/App.scss';
import './style/Dividers.scss';
import './style/ToRemove.scss';
import './style/ToAdd.scss';
import './style/Checkboxes.scss';
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowCircleLeft, faArrowCircleRight)

class App extends Component {
  state = {
    input: '',
    output: '',
    divider: '',
    connector: '',
    toRemoveStartEnd: '',
    toRemoveEntireString: '',
    toRemoveEntireSingle: ''
  }

  render() {
    const {input, output, divider, connector, toRemoveStartEnd, toRemoveEntireString, toRemoveEntireSingle} = this.state;

    const runMod = () => {
      this.setState({output: input});
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
          updateToRemoveEntireSingle={(toRemoveEntireSingle => this.setState({toRemoveEntireSingle}))} />
        <ContainerOutputTrigger
          output={output}
          runMod={runMod} />
      </div>
    );
  }
}

export default App;

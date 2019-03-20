import React, { Component } from 'react';
// Components
import InputText from './components/InputText';
import ConvertOutputText from './components/ConvertOutputText';
import Dividers from './components/Dividers';
import ToRemove from './components/ToRemove';
import ToAdd from './components/ToAdd';
import Checkboxes from './components/Checkboxes';
// Styles
import './style/App.scss';
import './style/InputText.scss';
import './style/ConvertOutputText.scss';
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
  constructor(props) {
    super(props);

    this.state = {text: ''}
  }

  render() {
    const currentText = text => {this.state.text = text};

    return (
      <div className="App">
        <InputText onTextChange={currentText} />
        <div className="modifiersContainer">
          <div className="colNarrow">
            <Dividers />
            <ToRemove />
          </div>
          <div className="colWide">
            <ToAdd />
            <Checkboxes />
          </div>
        </div>
        <ConvertOutputText outputText={this.state.currentText} />
      </div>
    );
  }
}

export default App;

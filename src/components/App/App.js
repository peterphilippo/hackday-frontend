import React, { Component } from 'react';

import './App.css';
import EditorBlock from '../EditorBlock/EditorBlock';
import SuggestionBlock from '../SuggestionBlock/SuggestionBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Awesome suggestion based article editor</h1>
        </header>
        <div className="App-intro">
            Just start writing your article...
        </div>
        <div className="App-main">
            <EditorBlock/>
            <SuggestionBlock/>
        </div>


      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import Searchbar from './Components/SearchBar'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
    constructor() {
        super();

        this.state = {
          data: dummyData
        }
    }
   
}

export default App;

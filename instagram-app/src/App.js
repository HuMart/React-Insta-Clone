import React from 'react';
import './App.css';
import Logo from './assets/iglogo.jpg'
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar'
import PostContainer from './Components/PostContainer/PostContainer';
import {Button} from 'reactstrap';
import CommentSection from './Components/CommentSection/CommentSection';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className=""
            href=""
            target=""
            rel=""
          >
           
          </a>          
        </header>
          <SearchBar />
          <PostContainer />
          <CommentSection />
      </div>
    );
  }
}

export default App;
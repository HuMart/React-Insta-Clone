import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar'
import PostContainer from './Components/PostContainer/PostContainer';
// import {Button} from 'reactstrap';
// import CommentSection from './Components/CommentContainer/CommentSection';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      postData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
          <SearchBar />
          <PostContainer postData={this.state.postData} />
      </div>
    );
  }
}

export default App;
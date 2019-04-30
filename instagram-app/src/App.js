import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar'
import PostContainer from './Components/PostContainer/PostContainer';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      post: dummyData
    };
  }
  render() {
    return(
      <div className='App'>
        <SearchBar />
        <PostContainer posts={this.state.post} />

      </div>
    )
  }
}

export default App;
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
      postData: [],
      filterPost: []
    };
  }
  
  componentDidMount() {
    this.setState({postData: dummyData});
  } 
  searchPostHandler = event => {
    const postData = this.state.postData.filter(post => {
      if(post.username.includes(event.target.value)){
        return post
      }
    });
    this.setState({filterPost: postData});
  };

  render() {
    return (
      <div className="App">
          <SearchBar 
            searchTerm={this.state.searchTerm}
            searchPost={this.searchPostHandler}
            />
          <PostContainer 
            postData={
              this.state.filterPost.length >0
              ? this.state.filterPost
              : this.state.postData
            } 
          />
      </div>
    );
  }
}

export default App;
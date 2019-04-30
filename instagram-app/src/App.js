import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar'
import PostContainer from './Components/PostContainer/PostContainer';
import PropTypes from 'prop-types';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      post: [],
      filterPost: []
    };
  }
  componentDidMount() {
    this.setState({post: dummyData})
  }
  postHandler = e=> {
    const post = this.state.post.filter(post => {
      if(post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({filterPost: post})
  }



  render() {
    return(
      <div className='App'>
        <SearchBar searchPost={this.postHandler}/>
        <PostContainer post= {
          this.state.filterPost.length > 0 
          ? this.state.filterPost 
          : this.state.post
        }
        />        

      </div>
    )
  }
}

export default App;
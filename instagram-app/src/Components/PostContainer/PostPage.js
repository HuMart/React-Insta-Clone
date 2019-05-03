import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostPage extends React.Component{
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
        const postSelect = this.state.postData.filter(selectedPost => {
          if(selectedPost.username.includes(event.target.value)){
            return selectedPost;
          }
        });
        this.setState({filterPost: postSelect});
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
                  this.state.filterPost.length > 0
                  ? this.state.filterPost
                  : this.state.postData
                } 
              />
          </div>
        );
      }
    }
    export default PostPage;
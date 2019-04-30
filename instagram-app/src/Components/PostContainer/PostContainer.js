import React from 'react';
import Post from './Post';
import "./Post.css";

const PostContainer = props => {
    return (
    <div className='post-container-wrapper'>
      {props.posts.map(post => <Post post={post}/>)}    
    </div>
    )    
}

export default PostContainer;
import React from 'react';
import Post from './Post';
import './Post.css';
import * as Icon from 'react-feather'

const PostContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.postData.map(post => <Post key={post.imageUrl} post={post} />)};
    </div>
    // <div className='likeSection'>
    //   <Icon.Heart className='social' />
    //   <Icon.MessageCircle className='social'/>
    // </div>
  );
};

export default PostContainer;

import React from 'react';
import CommentSection from '../CommentContainer/CommentSection'
import PostHeader from './PostHeader';
import './Post.css';


const Post = props => {
  return (
    <div className='post-content'>
      <PostHeader 
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
      <img 
        alt='post thumbnail'
        className='avatar'
        src={props.post.imageUrl}
      /> 
      </div>
      <CommentSection 
        comments={props.post.comments}
      />  
    </div>  
  );
}
export default Post;
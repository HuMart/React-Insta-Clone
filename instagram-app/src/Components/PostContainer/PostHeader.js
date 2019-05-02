import React from 'react';
import './Post.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-image"
          src={props.thumbnailUrl}
        />
      </div>
      <div className='name'>
        <strong>{props.username}</strong>
      </div>
    </div>
  );
};

export default PostHeader;
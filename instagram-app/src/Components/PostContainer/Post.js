import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
  return (
    <div className="p-box">
      <div className="p-header">
        <div>
          <img alt="thumb" className="thumbnail-img" src={props.post.thumbnailUrl} />
        </div>
        <p>{props.post.username}</p>
      </div>
      <div className="post-image-wrapper">
        <img alt="imageUrl" className="post-image" src={props.post.imageUrl} />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};


export default Post;

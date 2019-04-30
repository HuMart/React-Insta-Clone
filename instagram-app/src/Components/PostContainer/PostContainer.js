import React from "react";
import Post from "./Post";
import "./Post.css";
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <div className="post-container-wrapper">
      {props.post.map((post, index) => <Post post={post} key={index} />)}
    </div>
  );
};
PostContainer.propTypes = {
 post: PropTypes.array
}
export default PostContainer;

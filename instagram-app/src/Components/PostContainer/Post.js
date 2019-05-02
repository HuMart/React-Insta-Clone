import React from 'react';
import CommentSection from '../CommentContainer/CommentSection'
import PostHeader from './PostHeader';
import './Post.css';
import LikeSection from './LikeSection';
import PropTypes from 'prop-types';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({likes});
  };


  render() {
    return (
      <div className='post-content'>
        <PostHeader 
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className='post-image-wrapper'>
        <img 
          alt='post thumbnail'
          className='avatar'
          src={this.props.post.imageUrl}
        /> 
        <LikeSection
          incrementLike={this.props.post.incrementLike}
          likes={this.state.likes}
        />
        </div>
        <CommentSection 
          postId={this.props.imageUrl}
          comments={this.props.post.comments}
        />  
      </div>  
    );
  }  
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};





export default Post;
import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import * as Icon from 'react-feather'

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments
    };
  }
  render() {
    return (
      // <div className='likeSection'>
      //   <Icon.Heart className='social' />
      //   <Icon.MessageCircle className='social'/>
      // </div>      
      <div>
        {this.state.comments.map((c, index) => <Comment key={index} comment={c} />)}
        <CommentInput />
      </div>
    );
  }
}
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
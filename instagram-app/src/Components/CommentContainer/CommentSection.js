import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import * as Icon from 'react-feather'

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments,
        comment: ''
    };
  }

  componentDidMount() {
    const id = this.props.postId;
    if(localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    }else{
      this.setComments();
    }
  }

  componentWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  commentHandler = event => {
    this.setState({comment: event.target.value});
  };


  commentSubmitHandler = event => {
    event.preventDefault();
      const newComment = { text: this.state.comment, username: 'Paul'};
      const comments = this.state.comments.slice();
      comments.push(newComment);
      this.setState({ comments, comment: '' });
      setTimeout(() => {
      this.setComments();
    }, 750);
  } 



  render() {
    return (      
      <div>
        {this.state.comments.map((c, index) => <Comment key={index} comment={c} />)}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.commentSubmitHandler}
          changeCommemt={this.commentHandler} 
        />
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
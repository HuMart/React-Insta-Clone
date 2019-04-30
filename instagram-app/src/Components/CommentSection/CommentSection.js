import React from 'react';
import CommentInput from './CommentInput'
import './comment.css';

class CommentSection extends React.Component {
 constructor(props) {
     super(props);
     this.state = {
         comments: props.comments,
         comment: ""
     }
   }


    commentHandler = e => {
        this.setState({comment: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault();
        const thisComment = {text: this.state.comment};
        const comments = this.state.comments.slice();
        comments.push(thisComment);
        this.setState({comments, comment: ''});
    }


   render() {
       return (
           <div>
           {this.state.comments.map((comment, index) => {
               return(
               <div className='comment-text' key={index}>
               <span>{comment.text}</span>
               <span className='user'>-{comment.username}</span>
               </div>
               );
           })}
           <CommentInput 
           changeComment={this.commentHandler}
           addComment={this.submitHandler}
           />   
       </div>
       );
    }  
}
export default CommentSection;
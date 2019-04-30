import React from 'react';

import './comment.css';

class CommentSection extends React.Component {
 constructor(props) {
     super(props);
     this.state ={
         comments: props.comments
     }
   }
   render() {
       return <div>
           {this.state.comments.map(comment => {
               return( <div className='comment-text'>
               <span>{comment.text}</span>
               <span className='user'>{comment.username}</span>
               </div>
               )
           })}
       </div>
   }
}
export default CommentSection;
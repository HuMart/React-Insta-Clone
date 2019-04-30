import React from 'react';

import './CommentSection.css';

const CommentSection = props => {
    return (
        <div>
            { props.comment.text }
        <div className = 'comment-section-div'>
            <h5>{ props.comment.username }</h5>
            <p>{ props.comment.text }</p>
            </div>
        </div>
    );
}
export default CommentSection
import React from 'react'
import './comment.css'

const CommentSection = props => {
    return (
        <div className='comment'>
        <strong>{props.comment.username}</strong>{props.comment.text}
        </div>
    )
}

export default CommentSection;
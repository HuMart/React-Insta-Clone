import React from 'react';
import * as Icon from 'react-feather'

const LikeSection = props => {
    return [
        <div 
          className='like-section'
          key='like-icon-cont'
          onClick={props.incrementLike}>
          <div className='like-section-wrapper'>
            <Icon.Heart className="likeIcons" />
            <Icon.MessageCircle className="likeIcons" />
          </div>
        
          <div className="like-section" key='like-container'>
          <div className='like-section-wrapper'>{props.likes}</div> 
          </div>
        </div>
    ]
  
}

export default LikeSection;
import React from 'react';

const SocialMediaBtn = props => {
    return (
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + props.quote + '" - ' + props.author)}`}>
            <i className="fab fa-twitter-square social-media-icon" style={{color:props.color}}></i>
        </a>
    );
}

export default SocialMediaBtn;

import React from 'react';

const Quote = ({quote, author, color}) => {
    return (
        <React.Fragment>
            <blockquote className="blockquote quote" style={{color}}>
                <p id="text"><i class="fa fa-quote-left"> </i> {quote}</p>
                <footer id="author" className="blockquote-footer" style={{color}}>
                    {author}
                </footer>
            </blockquote>
        </React.Fragment>
    );
}

export default Quote;

import React from 'react';

const GetQuoteBtn = props => {
    return (
        <button id="new-quote" className="btn btn-sm float-end" onClick={props.onGetQuote} style={{backgroundColor: props.color}}>
            {props.btnLabel}
        </button>
    );
}

export default GetQuoteBtn;

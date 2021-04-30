import React from 'react';

const Toolbar = props => {
    return (
        <div className="toolbar">
            <i className="fas fa-code"></i>
            {props.title}
            <i className={`fas ${props.getMinMaxIcon()}`} onClick={props.handleIconClick} ></i>
        </div>
    );
}

export default Toolbar;

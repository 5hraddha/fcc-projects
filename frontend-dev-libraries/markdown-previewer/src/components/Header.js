import React from 'react';

const Header = () => {
    return(
        <header>
            <h1 className="header">Live Markdown Previewer</h1>
            <p className="directions">(Type the markdown in the editor on the left to see the preview on the right)</p>
        </header>
    );
}

export default Header;

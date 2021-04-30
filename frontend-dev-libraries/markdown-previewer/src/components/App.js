import '../dist/css/main.css';
import React    from 'react';
import Header   from './Header';
import Footer   from './Footer'; 
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreviewer from './MarkdownPreviewer';

class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Header />
                <div className="wrapper">
                    <MarkdownEditor />
                    <MarkdownPreviewer />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;

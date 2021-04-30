import React                    from 'react';
import { useEffect, useState }  from 'react';
import { connect }              from 'react-redux';
import {    setMarkdown, 
            editorMaximised, 
            editorMinimised,
            previewerMinimised }   from '../actions';
import Toolbar                  from './Toolbar';

const MarkdownEditor = props => {
    const [maxClass, setMaxClass] = useState('');

    useEffect(() => {
        if(props.isMaximised){
            setMaxClass('maximised');
        }else{
            setMaxClass('');
        }
    }, [props.isMaximised]);

    const handleChange = e => {
        props.setMarkdown(e.target.value);
    }

    const getMinMaxIcon = () => {
        return (props.isMaximised) ? 'fa-compress-arrows-alt' : 'fa-expand-arrows-alt';
    }

    const handleIconClick = () => {
        if (props.isMaximised){
            props.editorMinimised();
        } else {
            props.editorMaximised();
            props.previewerMinimised();
        }
    }

    return (
        <div className={`markdownEditor ${maxClass}`}>
            <Toolbar    title="Markdown Editor" 
                        getMinMaxIcon={getMinMaxIcon} 
                        handleIconClick={handleIconClick} />                
            <textarea 
                    id="editor"
                    type= "text"
                    onChange={handleChange}
                    value={props.markdown}
            />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        markdown: state.content.markdown,
        isMaximised: state.editor.isEditorMaximised
    }
}

export default connect(mapStateToProps, {   setMarkdown, 
                                            editorMaximised, 
                                            editorMinimised,
                                            previewerMinimised })(MarkdownEditor);

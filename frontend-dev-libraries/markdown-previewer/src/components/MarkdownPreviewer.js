import React                    from 'react';
import { useEffect, useState }  from 'react';
import { connect }              from 'react-redux';
import marked                   from 'marked';
import {    previewerMaximised, 
            previewerMinimised,
            editorMinimised }   from '../actions';
import Toolbar                  from './Toolbar';

const MarkdownPreviewer = props => {
    const [maxClass, setMaxClass] = useState('');

    useEffect(() => {
        if(props.isMaximised){
            setMaxClass('maximised');
        }else{
            setMaxClass('');
        }
    }, [props.isMaximised]);

    const getMinMaxIcon = () => {
        return (props.isMaximised) ? 'fa-compress-arrows-alt' : 'fa-expand-arrows-alt';
    }

    const handleIconClick = () => {
        if (props.isMaximised){
            props.previewerMinimised();
        } else {
            props.previewerMaximised();
            props.editorMinimised();
        }
    }

    return (
        <div className={`markdownPreviewer ${maxClass}`}>
            <Toolbar    title="Markdown Previewer" 
                        getMinMaxIcon={getMinMaxIcon} 
                        handleIconClick={handleIconClick} />
            <div
                dangerouslySetInnerHTML={{
                    __html: marked(props.markdown)}}
            id='preview'/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        markdown: state.content.markdown,
        isMaximised: state.previewer.isPreviewerMaximised 
    }
}

export default connect(mapStateToProps, {   previewerMaximised, 
                                            previewerMinimised,
                                            editorMinimised })(MarkdownPreviewer);
                                            

import {    EDITOR_MAXIMISED, 
            EDITOR_MINIMISED, 
            PREVIEWER_MAXIMISED,
            PREVIEWER_MINIMISED,
            SET_MARKDOWN} from './types';

export const editorMaximised = () => {
    return {
        type: EDITOR_MAXIMISED
    };
} 

export const editorMinimised = () => {
    return {
        type: EDITOR_MINIMISED
    };
}

export const previewerMaximised = () => {
    return {
        type: PREVIEWER_MAXIMISED
    };
} 

export const previewerMinimised = () => {
    return {
        type: PREVIEWER_MINIMISED
    };
}

export const setMarkdown = markdown => {
    return {
        type: SET_MARKDOWN,
        payload: markdown
    }  
}


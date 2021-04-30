import { combineReducers} from 'redux';
import {    EDITOR_MAXIMISED, 
            EDITOR_MINIMISED,
            PREVIEWER_MAXIMISED,
            PREVIEWER_MINIMISED,
            SET_MARKDOWN } from '../actions/types';

const initialMarkdown = `
# This is Heading # 1
## This is Heading # 2 

### Text Styles
**This is bold text**  
*This is italics text*  
~~Strikethrough~~

### Links  
[Freecodecamp Twitter](https://twitter.com/freecodecamp)

### Lists
#### Ordered Lists
1. Item # 1
2. Item # 2
3. Item # 3

#### Unordered Lists
- Item # 1
* Item # 2
    - Sub Item # 1  
    - Sub Item # 2

### Code
- Inline Code \`<p>I am an Inline code</p>\`
- Let's see how a code block is displayed:
\`\`\`javascript
const colors = [red, green, blue];
console.log(colors[1]);
\`\`\`

### BlockQuote
> This is a blockquote.

### Image
![REACT JS](https://raw.githubusercontent.com/5hraddha/misc/master/images/react-js.png)
`;

export const editorStateReducer = (state = { isEditorMaximised: false}, action) => {
    switch(action.type){
        case EDITOR_MINIMISED: 
            return {...state, isEditorMaximised: false};
        case EDITOR_MAXIMISED:
            return {...state, isEditorMaximised: true};
        default:
            return state;
    }
}

export const previewerStateReducer = (state = { isPreviewerMaximised: false}, action) => {
    switch(action.type){
        case PREVIEWER_MINIMISED: 
            return {...state, isPreviewerMaximised: false};
        case PREVIEWER_MAXIMISED:
            return {...state, isPreviewerMaximised: true};
        default:
            return state;
    }
}

export const setMarkdown = ( state = { markdown: initialMarkdown}, action) => {
    if(action.type === SET_MARKDOWN){
        return {...state, markdown: action.payload};
    }
    return state;
}

export default combineReducers({
    editor : editorStateReducer,
    previewer : previewerStateReducer,
    content: setMarkdown
});

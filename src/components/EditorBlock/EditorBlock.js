import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export default class EditorBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
        };

        this.textArray = '';
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onEditorStateChange(editorState) {
        this.textArray = editorState.getCurrentContent().getPlainText().split('\n');
        if (this.textArray.length > 1) {
            console.log(this.textArray.slice(0, -1))
        }
        this.setState({
            editorState,
        });
        console.log(this.textArray.length);
    };

    render() {
        const { editorState } = this.state;
        return (
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
            />
        );
    }
}
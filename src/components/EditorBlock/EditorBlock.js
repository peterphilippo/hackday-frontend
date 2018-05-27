import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as actions from '../../actions';
import {connect} from "react-redux";

class EditorBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
        };

        this.textArray = '';
        this.nrParagraphs = 0;
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onEditorStateChange(editorState) {
        this.textArray = editorState.getCurrentContent().getPlainText().split('\n');

        if (this.textArray.length > 1) {
            if (this.textArray.length > this.nrParagraphs) {
                console.log(this.textArray.slice(0, -1));
                this.nrParagraphs = this.textArray.length;
                this.props.getData();
            }
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

export default connect(null, actions)(EditorBlock);

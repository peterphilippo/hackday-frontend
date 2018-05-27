import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class SuggestionMid extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.getSuggestionType = this.getSuggestionType.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.expandSuggestion('mid');
    }

    getSuggestionType() {
        if (this.props.suggestionType === 'mid') {
            return 'full-size';
        }

        if (this.props.suggestionType === 'none') {
            return 'normal-size';
        }

        return 'hidden'
    }

    renderEmpty() {
        return (
            <div className={`suggestion-single suggestion-mid ${this.getSuggestionType()}`}>
                <div className="suggestion-single-placeholder-wrapper">
                    <h2 className="suggestion-single-placeholder">Type your first paragraph to get video suggestions.</h2>
                </div>
            </div>
        )
    }

    renderFilled() {
        return (
            <div className={`suggestion-single suggestion-mid ${this.getSuggestionType()}`}>
                <YouTube
                    videoId={this.props.videoID.id.videoId}
                    className="ytiframe"
                    containerClassName="ytcontainer"
                />
                <button className="suggestion-button-expand" onClick={this.handleClick}>Show all</button>
            </div>
        );
    }

    render() {
        return this.props.data ? this.renderFilled() : this.renderEmpty()
    }
}

function mapStateToProps(state) {
    return {
        suggestionType: state.suggestionType,
        data: state.data,
    }
}

export default connect(mapStateToProps, actions)(SuggestionMid);

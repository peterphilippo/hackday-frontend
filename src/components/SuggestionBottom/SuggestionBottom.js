import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class SuggestionBottom extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.getSuggestionType = this.getSuggestionType.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.expandSuggestion('bot');
    }

    getSuggestionType() {
        if (this.props.suggestionType === 'bot') {
            return 'full-size';
        }

        if (this.props.suggestionType === 'none') {
            return 'normal-size';
        }

        return 'hidden'
    }

    renderEmpty() {
        return (
            <div className={`suggestion-single suggestion-bot ${this.getSuggestionType()}`}>
                <div className="suggestion-single-placeholder-wrapper">
                    <h2 className="suggestion-single-placeholder">Type your first paragraph to get article suggestions.</h2>
                </div>
            </div>
        )
    }

    renderFilled() {
        return (
            <div className={`suggestion-single suggestion-bot ${this.getSuggestionType()}`}>
                <div className="suggestion-article">
                    <div className="suggestion-article-info">
                        <a className="suggestion-article-title" href={this.props.articleInfo.url}><h2>{this.props.articleInfo.title}</h2></a>
                        <p className="suggestion-article-text">{this.props.articleInfo.desc}</p>
                    </div>
                </div>
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

export default connect(mapStateToProps, actions)(SuggestionBottom);
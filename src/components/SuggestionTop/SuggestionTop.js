import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import * as actions from '../../actions';

class SuggestionTop extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.getSuggestionType = this.getSuggestionType.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.expandSuggestion('top');
    }

    getSuggestionType() {
        if (this.props.suggestionType === 'top') {
            return 'full-size';
        }

        if (this.props.suggestionType === 'none') {
            return 'normal-size';
        }

        return 'hidden'
    }

    render() {
        console.log('suggestion type u topu', this.props.suggestionType);
        return (
            <div className={`suggestion-single suggestion-top ${this.getSuggestionType()}`}>
                <TwitterTweetEmbed
                    tweetId={'933354946111705097'}
                />
                <button className="suggestion-button-expand" onClick={this.handleClick}>Show all</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        suggestionType: state.suggestionType,
    }
}

export default connect(mapStateToProps, actions)(SuggestionTop);
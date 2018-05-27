import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import * as actions from '../../actions';

class SuggestionTop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: '933354946111705097'
        };

        this.handleClick = this.handleClick.bind(this);
        this.getSuggestionType = this.getSuggestionType.bind(this);
        this.getId = this.getId.bind(this);
    }

    // componentWillReceiveProps(props) {
    //     console.log('will receive props', props);
    //     TwitterTweetEmbed.forceUpdate();
    // }

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

    getId() {
        if (this.props.data.data) {
            console.log('ima data', this.props.data.data[0]);
            this.setState({
                currentId: this.props.data.data[0],
            });
        }

        return '933354946111705097'
    }

    render() {
        console.log('suggestion type u topu', this.props);
        return (
            <div className={`suggestion-single suggestion-top ${this.getSuggestionType()}`}>
                <TwitterTweetEmbed
                    tweetId={this.state.currentId}
                />
                <button className="suggestion-button-expand" onClick={this.handleClick}>Show all</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        suggestionType: state.suggestionType,
        data: state.data,
    }
}

export default connect(mapStateToProps, actions)(SuggestionTop);
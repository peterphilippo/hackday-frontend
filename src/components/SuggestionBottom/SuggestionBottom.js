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

    render() {
        console.log('suggestion type u botu', this.props.suggestionType);
        return (
            <div className={`suggestion-single suggestion-bot ${this.getSuggestionType()}`}>
                Suggestion bottom
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

export default connect(mapStateToProps, actions)(SuggestionBottom);
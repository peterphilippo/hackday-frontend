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

    render() {
        console.log('suggestion type u midu', this.props.suggestionType);
        return (
            <div className={`suggestion-single suggestion-mid ${this.getSuggestionType()}`}>
                <YouTube
                    videoId="0PrUr3bQdwM"
                    className="ytiframe"
                    containerClassName="ytcontainer"
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

export default connect(mapStateToProps, actions)(SuggestionMid);

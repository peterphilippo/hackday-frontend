import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SuggestionTop from '../SuggestionTop/SuggestionTop';
import SuggestionMid from '../SuggestionMid/SuggestionMid';
import SuggestionBottom from '../SuggestionBottom/SuggestionBottom';


class SuggestionBlock extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.expandSuggestion('none');
    }

    getSuggestionType() {
        if (this.props.suggestionType === 'none') {
            return 'suggestion-block-multiple';
        }

        return 'suggestion-block-single';
    }

    render() {
        return (
            <div className={`suggestion-block ${this.getSuggestionType()}`}>
                <button className="suggestion-button-clear" onClick={this.handleClick}>X</button>
                <SuggestionTop/>
                <SuggestionMid/>
                <SuggestionBottom/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        suggestionType: state.suggestionType,
    }
}

export default connect(mapStateToProps, actions)(SuggestionBlock);

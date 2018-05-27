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

    renderAllSuggestions() {
        var twitterId;
        var ytId;
        var title;
        var desc;
        var url;
        if (this.props.data) {
            twitterId = this.props.data[0].data[0];
            ytId = this.props.data[2].data.items[0];
            title = this.props.data[1].data[0].title;
            desc = this.props.data[1].data[0].desc;
            url = this.props.data[1].data[0].url;

        }

        return [
            <SuggestionTop givenID={twitterId}/>,
            <SuggestionMid videoID={ytId}/>,
            <SuggestionBottom articleInfo={{
                title,
                desc,
                url,
            }}/>
        ];
    }

    renderSingleSuggestion(type) {
        if (type === 'top') {
            return [
                <SuggestionTop/>,
                <SuggestionTop/>,
                <SuggestionTop/>,
                <SuggestionTop/>,
                <SuggestionTop/>
            ]
        }

        if (type === 'mid') {
            return [
                <SuggestionMid/>,
                <SuggestionMid/>,
                <SuggestionMid/>,
                <SuggestionMid/>,
                <SuggestionMid/>
            ]
        }

        if (type === "bot") {
            return [
                <SuggestionBottom/>,
                <SuggestionBottom/>,
                <SuggestionBottom/>,
                <SuggestionBottom/>,
                <SuggestionBottom/>
            ]
        }
    }

    render() {
        return (
            <div className={`suggestion-block ${this.getSuggestionType()} ${this.props.suggestionType !== 'none' ? 'suggestion-block-expanded' : ''}`}>
                <button className="suggestion-button-clear" onClick={this.handleClick}>X</button>
                {this.props.suggestionType === 'none' ? this.renderAllSuggestions() : this.renderSingleSuggestion(this.props.suggestionType)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        suggestionType: state.suggestionType,
        data: state.data,
    }
}

export default connect(mapStateToProps, actions)(SuggestionBlock);

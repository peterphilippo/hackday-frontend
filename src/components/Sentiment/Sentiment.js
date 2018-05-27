import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';

class Sentiment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('SENTIMENT', this.props);
    return (
      <div>
        Sentiment---{this.props.sentimentPercentage}
      </div>
    );
  }
}

function mapStateToProps(state) {

  console.log(state, 'shaksahksajhsa---------------------------');
  return {
    sentimentPercentage: state.sentimentPercentage,
    data: state.data
  }
}

export default connect(mapStateToProps, actions)(Sentiment);

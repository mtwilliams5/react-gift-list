import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/itemActions';

class GiftLiftPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      //jsx here
    );
  }
}

GiftLiftPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftLiftPage);

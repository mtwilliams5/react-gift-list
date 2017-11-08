import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/requestorActions';
import RequestorList from './RequestorList.jsx';

export const HomePage = (props) => {
  return (
    <RequestorList requestors={props.requestors}/>
  );
};

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  requestors: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    requestors: state.requestors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

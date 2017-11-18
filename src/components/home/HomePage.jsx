import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/requestorActions';
import RequestorList from './RequestorList.jsx';

export const HomePage = (props) => {
  const requestorListClassNames = "btn-group btn-group-lg btn-group-justified";
  const requestorListStyles = {position: 'relative', top: '40%'};
  return (
    <div className="container h-100">
      <RequestorList
        requestors={props.requestors}
        classNames={requestorListClassNames}
        styles={requestorListStyles}
      />
    </div>
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

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import GiftList from './GiftList.jsx';
import Header from '../common/Header.jsx';
import toastr from 'toastr';

class GiftListPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header requestors={this.props.requestors}/>
        <GiftList items={this.props.items}/>
      </div>
    );
  }
}

GiftListPage.propTypes = {
  actions: PropTypes.object.isRequired,
  requestor: PropTypes.object.isRequired,
  items: PropTypes.array
};

function getRequestorById(requestors, id) {
  const requestor = requestors.filter(requestor => requestor.id == id);
  if (requestor.length) return requestor[0];
  return null;
}

function getItemsByRequestor(allItems, requestor) {
  const requestorItems = allItems.filter(item => item.requestorId == requestor.id);
  if (requestorItems.length) return requestorItems;
  return [];
}

function mapStateToProps(state, ownProps) {
  const requestorId = ownProps.match.params.requestor;

  let requestor = {id: '', firstName: '', lastName: ''};
  if(requestorId && state.requestors.length > 0) {
    requestor = getRequestorById(state.requestors, requestorId)
  }

  return {
    requestor,
    requestors: state.requestors,
    items: getItemsByRequestor(state.items, requestor)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftListPage);

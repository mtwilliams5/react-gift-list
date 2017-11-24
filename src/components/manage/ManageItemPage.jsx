import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import {getRequestorById, getItemById} from '../../utils/filterHelper.js';
import Header from '../common/Header.jsx';
import toastr from 'toastr';

class ManageItemPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header requestors={this.props.requestors} path={this.props.path} />
        <div className="container" style={{padding: '1rem', marginTop: '3rem'}}>
          Form here
        </div>
      </div>
    );
  }
}

ManageItemPage.propTypes = {
  actions: PropTypes.object.isRequired,
  requestor: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  const itemId = ownProps.match.params.item;

  let requestor = {id: '', firstName: '', lastName: ''};
  let item = {id: '', title: '', extraInfo: '', requestorId: '', url: '', claimed: false, lastUpdated: ''};

  if(itemId && state.items.length > 0) {
    item = getItemById(state.items, itemId)
  }

  if(item.requestorId && state.requestors.length > 0) {
    requestor = getRequestorById(state.requestors, item.requestorId)
  }

  return {
    requestor,
    item,
    requestors: state.requestors,
    path: '/manage/list/'
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageItemPage);

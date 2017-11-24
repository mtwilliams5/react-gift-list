import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import {getItemsByRequestor, getRequestorById, getItemById} from '../../utils/filterHelper.js';
import GiftList from '../lists/GiftList.jsx';
import Header from '../common/Header.jsx';
import toastr from 'toastr';

class ManageListPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.editItem = this.editItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  editItem(event) {
    event.preventDefault();
    const itemId = event.target.getAttribute('data-itemid');
    this.props.history.push('/manage/item/' + itemId);
  }

  removeItem(event) {
    event.preventDefault();
    if(confirm('Are you sure you want to remove this item?')) {
      console.log('removing');
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <Header requestors={this.props.requestors} path={this.props.path} />
        <div className="container" style={{padding: '1rem', marginTop: '3rem'}}>
          <GiftList items = {this.props.items} clickEvent={this.editItem} onRemove={this.removeItem} />
        </div>
      </div>
    );
  }
}

ManageListPage.propTypes = {
  actions: PropTypes.object.isRequired,
  requestor: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired
};

function getPath(uri) {
  let arr = uri.split('/');
  arr.pop();
  return arr.join('/') + '/';
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
    items: getItemsByRequestor(state.items, requestor),
    path: getPath(ownProps.location.pathname)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageListPage);

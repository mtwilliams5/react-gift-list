import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import GiftList from './GiftList.jsx';
import Header from '../common/Header.jsx';
import HelpBanner from '../common/HelpBanner.jsx';
import toastr from 'toastr';

class GiftListPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: Object.assign({}, this.props.items)
    };

    this.claimItem = this.claimItem.bind(this);
  }

  claimItem(event) {
    event.preventDefault();
    let itemId = event.target.getAttribute('data-itemid');
    let item = getItemById(this.props.items, itemId);
    if(item.claimed) {
      toastr.error('Item is claimed already');
      return;
    }
    const claimedItem = Object.assign({}, item, {
      claimed: true
    });
    this.props.actions.updateItem(claimedItem)
      .then(toastr.success('Item marked as claimed!'))
      .catch(error => {
        toastr.error(error);
      });
  }

  render() {
    return (
      <div>
        <Header requestors={this.props.requestors}/>
        <div className="container" style={{padding: '1rem', marginTop: '3rem'}}>
          <HelpBanner />
          <GiftList items={this.props.items} claimItem={this.claimItem} />
        </div>
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

function getItemById(items, id) {
  const item = items.filter(item => item.id == id);
  if (item.length) return item[0];
  return null;
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

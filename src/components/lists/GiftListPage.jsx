import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import {getItemsByRequestor, getRequestorById, getItemById} from '../../utils/filterHelper.js';
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
    const itemId = event.target.getAttribute('data-itemid');
    const item = getItemById(this.props.items, itemId);
    if(item.claimed) {
      if (!confirm('Are you sure you want to mark this item as available again?')) {
        return;
      } else {
        const unclaimedItem = Object.assign({}, item, {
          claimed: false
        });
        this.props.actions.updateItem(unclaimedItem)
          .then(toastr.success('Item marked as available!'))
          .catch(error => {
            toastr.error(error);
          });
        return;
      }
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
          <GiftList items={this.props.items} clickEvent={this.claimItem} />
        </div>
      </div>
    );
  }
}

GiftListPage.propTypes = {
  actions: PropTypes.object.isRequired,
  requestor: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

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

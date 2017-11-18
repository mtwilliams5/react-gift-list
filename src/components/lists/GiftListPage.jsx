import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import toastr from 'toastr';

class GiftListPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        {
          //jsx here
        }
      </div>
    );
  }
}

GiftListPage.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  requestorId: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  const requestorId = ownProps.params.id;

  return {
    items: state.items,
    requestorId: requestorId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftListPage);

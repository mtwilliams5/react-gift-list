import React from 'react';
import PropTypes from 'prop-types';
import GiftListItem from './GiftListItem.jsx';

const GiftList = ({items, claimItem}) => {
  return (
    <div className="panel panel-default" style={{padding: '1rem'}}>
      <ul className="list-unstyled" style={{margin: '1rem'}}>
        {items.map(item =>
          <GiftListItem key={item.id} item={item} claimItem={claimItem} />
        )}
      </ul>
    </div>
  );
}

GiftList.propTypes = {
  items: PropTypes.array.isRequired,
  claimItem: PropTypes.func.isRequired
}

export default GiftList;

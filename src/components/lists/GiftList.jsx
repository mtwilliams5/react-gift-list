import React from 'react';
import PropTypes from 'prop-types';
import GiftListItem from './GiftListItem.jsx';

const GiftList = ({items, claimItem}) => {
  return (
    <div className="container panel panel-default" style={{padding: '1rem', marginTop: '3rem'}}>
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
  onClick: PropTypes.func
}

export default GiftList;

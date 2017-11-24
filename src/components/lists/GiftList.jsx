import React from 'react';
import PropTypes from 'prop-types';
import GiftListItem from './GiftListItem.jsx';

const GiftList = ({items, clickEvent, onRemove}) => {
  return (
    <div className="panel panel-default" style={{padding: '1rem'}}>
      <ul className="list-unstyled" style={{margin: '1rem'}}>
        {items.map(item =>
          <GiftListItem
            key={item.id}
            item={item}
            clickEvent={clickEvent}
            onRemove={onRemove}
          />
        )}
      </ul>
    </div>
  );
}

GiftList.propTypes = {
  items: PropTypes.array.isRequired,
  clickEvent: PropTypes.func.isRequired,
  onRemove: PropTypes.func
}

export default GiftList;

import React from 'react';
import PropTypes from 'prop-types';

const GiftListItem = ({item, claimItem}) => {
  let className = item.claimed ? 'claimed' : '';
  return (
    <li className={className} style={{marginTop: '2rem', marginBottom: '2rem'}}>
      <h4>
        <span onClick={claimItem} data-itemid={item.id}>
          {item.title}
          {item.extraInfo ? <small style={{marginLeft: '2rem'}}>{' ' + item.extraInfo}</small> : null}
        </span>
        {(item.url && !item.claimed) ? <small style={{marginLeft: '2rem'}}>{' '}<a href={item.url} target="_blank">[Link]</a></small> : null}
      </h4>
    </li>
  )
}

GiftListItem.propTypes = {
  item: PropTypes.object.isRequired,
  claimItem: PropTypes.func.isRequired
};

export default GiftListItem;

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button.jsx';

const GiftListItem = ({item, clickEvent, onRemove}) => {
  let className = item.claimed ? 'claimed' : '';
  return (
    <li className={className} style={{marginTop: '2rem', marginBottom: '2rem'}}>
      <h4>
        <span onClick={clickEvent} data-itemid={item.id}>
          {item.title}
          {item.extraInfo ? <small style={{marginLeft: '2rem'}}>{' ' + item.extraInfo}</small> : null}
        </span>
        {(item.url && !item.claimed) ? <small style={{marginLeft: '2rem'}}>{' '}<a href={item.url} target="_blank">[Link]</a></small> : null}
        {(onRemove && Button) ? <small className="pull-right"><Button act="edit" txt="Edit Item" onClick={clickEvent} itemid={item.id}/>{' '}<Button act="remove" txt="Remove Item" onClick={onRemove} itemid={item.id}/></small> : null }
      </h4>
    </li>
  )
}

GiftListItem.propTypes = {
  item: PropTypes.object.isRequired,
  clickEvent: PropTypes.func.isRequired,
  onRemove: PropTypes.func
};

export default GiftListItem;

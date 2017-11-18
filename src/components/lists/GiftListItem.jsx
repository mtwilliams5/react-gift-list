import React from 'react';
import PropTypes from 'prop-types';

const GiftListItem = ({item}) => {
  return (
    <li style={{marginTop: '2rem', marginBottom: '2rem'}}>
      <h4>
        {item.title}
        {item.extraInfo ? <small style={{marginLeft: '2rem'}}>{' ' + item.extraInfo}</small> : null}
        {item.url ? <small style={{marginLeft: '2rem'}}>{' '}<a href={item.url}>[Link]</a></small> : null}
      </h4>
    </li>
  )
}

export default GiftListItem;

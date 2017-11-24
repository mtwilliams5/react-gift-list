import React from 'react';
import PropTypes from 'prop-types';

const Button = ({act, txt, onClick, itemid}) => {
  let className;
  switch(act) {
    case "remove":
      className='btn btn-danger';
      break;

    case "edit":
      className='btn btn-primary';
      break;

    default:
      className='btn btn-default';
      break;
  }
  return (
    <button className={className} onClick={onClick} data-itemid={itemid}>{txt}</button>
  );
}

Button.propTypes = {
  act: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  itemid: PropTypes.string.isRequired
}

export default Button;

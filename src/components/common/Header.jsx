import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Header = ({requestors}) => {
  return (
    <ul className="nav nav-pills nav-justified">
      {requestors.map(requestor =>
        <li key={requestor.id}>
          <NavLink exact to={'/' + requestor.id}>{requestor.firstName}</NavLink>
        </li>
      )}
    </ul>
  );
}

export default Header;

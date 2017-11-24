import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Header = ({requestors, path}) => {
  let uri = path? path : '/';
  return (
    <ul className="nav nav-pills nav-justified">
      {requestors.map(requestor =>
        <li key={requestor.id}>
          <NavLink exact to={uri + requestor.id}>{requestor.firstName}</NavLink>
        </li>
      )}
    </ul>
  );
}

Header.propTypes = {
  requestors: PropTypes.array.isRequired,
  path: PropTypes.string
}

export default Header;

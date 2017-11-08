import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const RequestorButton = ({requestor, link}) => {
  return (
    <Link to={'/' + link} className="btn btn-lg btn-default my-auto" style={{padding: '3rem 0'}}>{requestor}</Link>
  )
}

export default RequestorButton;

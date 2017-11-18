import React from 'react';
import PropTypes from 'prop-types';
import RequestorButton from './RequestorButton.jsx';

const RequestorList = ({requestors, classNames, styles}) => {
  return (
    <div className={classNames} style={styles}>
      {requestors.map(requestor =>
        <RequestorButton key={requestor.id} requestor={requestor.firstName} link={requestor.id}/>
      )}
    </div>
  );
}

export default RequestorList;

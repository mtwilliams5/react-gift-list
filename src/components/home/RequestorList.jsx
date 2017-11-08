import React from 'react';
import PropTypes from 'prop-types';
import RequestorButton from './RequestorButton.jsx';

const RequestorList = ({requestors}) => {
  return (
    <div className="container h-100">
      <div className="btn-group btn-group-lg btn-group-justified" style={{position: 'relative', top: '40%'}}>
        {requestors.map(requestor =>
          <RequestorButton key={requestor.id} requestor={requestor.firstName} link={requestor.id}/>
        )}
      </div>
    </div>
  );
}

export default RequestorList;

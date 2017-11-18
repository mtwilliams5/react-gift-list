import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import RequestorList from './RequestorList.jsx';

function setup() {
  const props = {
    requestors: [
      {
        id: 'matt-williams',
        firstName: 'Matt',
        lastName: 'Williams',
      },
      {
        id: 'natasha-warnock',
        firstName: 'Natasha',
        lastName: 'Warnock'
      }
    ]
  };

  return shallow(<RequestorList {...props} />);
}

describe('RequestorList', () => {
  it('should render a <RequestorButton /> component for each requestor passed in', () => {
    const wrapper = setup();
    expect(wrapper.find('RequestorButton').length).toBe(2);
  });
});

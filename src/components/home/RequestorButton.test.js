import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import RequestorButton from './RequestorButton.jsx';

function setup() {
  const props = {
    requestor: "",
    link: ""
  };

  return shallow(<RequestorButton {...props} />);
}

describe('RequestorButton', () => {
  it('should render a single <Link /> component', () => {
    const wrapper = setup();
    expect(wrapper.find('Link').length).toBe(1);
  });
});

import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import GiftList from './GiftList.jsx';

function setup() {
  const props = {
    items: [
      {
        id: "playstation-vr",
        title: "Playstation VR"
      },
      {
        id: "la-noire",
        title: "LA Noire"
      }
    ],
    clickEvent: () => { /*no-op*/ }
  };

  return shallow(<GiftList {...props} />);
}

describe('GiftList', () => {
  it('should render a <GiftListItem /> component for each item passed in', () => {
    const wrapper = setup();
    expect(wrapper.find('GiftListItem').length).toBe(2);
  });
});

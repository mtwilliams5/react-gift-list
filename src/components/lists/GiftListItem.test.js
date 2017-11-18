import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import GiftListItem from './GiftListItem.jsx';

function setup() {
  const props = {
    item: [
      {
        id: "playstation-vr",
        title: "Playstation VR"
      }
    ]
  };

  return shallow(<GiftListItem {...props} />);
}

describe('GiftListItem', () => {
  it('should render a list item', () => {
    const wrapper = setup();
    expect(wrapper.find('li').length).toBe(1);
  });
});

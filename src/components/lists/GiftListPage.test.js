import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import GiftListPage from './GiftListPage.jsx';

function setup() {
  const props = {
    params: {
      id: 'matt-williams'
    },
    items: [
      {
        id: "playstation-vr",
        title: "Playstation VR",
        requestorId: "matt-williams",
        claimed: false
      },
      {
        id: "la-noire",
        title: "LA Noire",
        requestorId: "matt-williams",
        claimed: false
      },
      {
        id: "funny-apron-and-oven-mitts",
        title: "Funny Apron and Oven Mitts",
        requestorId: "natasha-warnock",
        claimed: false
      }
    ]
  };

  return shallow(<GiftListPage {...props} />);
}

describe('GiftListPage', () => {
  it('should render a <GiftListItem /> component for each item that matches the requestor passed in', () => {
    const wrapper = setup();
    expect(wrapper.find('GiftListItem').length).toBe(2);
  });
});

import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import GiftListItem from './GiftListItem.jsx';

function setup(extraInfo = "", url = "", claimed = false) {
  const props = {
    item: {
      id: "playstation-vr",
      title: "Playstation VR",
      extraInfo,
      url,
      claimed
    }
  };

  return shallow(<GiftListItem {...props} />);
}

describe('GiftListItem', () => {
  it('should render a list item and a header', () => {
    let expected = 'Playstation VR';
    const wrapper = setup();

    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('h4').text()).toEqual(expected);
  });

  it('should only render the item title if no extra data is given', () => {
    let expected = 'Playstation VR';
    const wrapper = setup();

    expect(wrapper.find('h4').text()).toEqual(expected);
    expect(wrapper.find('small').length).toBe(0);
  });

  it('should render the extraInfo if data is given', () => {
    let extraInfo = "Playstation 4";
    const wrapper = setup(extraInfo);

    expect(wrapper.find('small').length).toBe(1);
    expect(wrapper.find('small').text()).toEqual(' ' + extraInfo);
  });

  it('should render the url if data is given', () => {
    let url = "http://www.example.com/playstation-vr";
    const wrapper = setup('', url);

    expect(wrapper.find('small').length).toBe(1);
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find({ href: url }).length).toBe(1);
    expect(wrapper.find('a').text()).toEqual('[Link]');
  });

  it('should render both the extraInfo and url if given', () => {
    let extraInfo = "Playstation 4";
    let url = "http://www.example.com/playstation-vr";
    const wrapper = setup(extraInfo, url);

    expect(wrapper.find('small').length).toBe(2);
    expect(wrapper.find('small').first().text()).toEqual(' ' + extraInfo);
    expect(wrapper.find('small').last().childAt(1).type()).toEqual('a');
    expect(wrapper.find({ href: url }).length).toBe(1);
  });

  it('should strike through the item if claimed', () => {
    let claimed = true;
    const wrapper = setup('','',claimed);

    expect(wrapper.find('li').hasClass('claimed')).toBe(true);
  });

  it('should hide the url if claimed', () => {
    let claimed = true;
    let url = "http://www.example.com/playstation-vr";
    const wrapper = setup('', url, claimed);

    expect(wrapper.find('li').hasClass('claimed')).toBe(true);
    expect(wrapper.find('small').length).toBe(0);
    expect(wrapper.find('a').length).toBe(0);
  })
});

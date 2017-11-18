// import * as types from '../constants/actionTypes';
// import * as itemActions from './itemActions';

describe('Item Actions', () => {
  // const appState = {
  //   items: [
  //     {
  //       id: "playstation-vr",
  //       title: "Playstation VR",
  //       extraInfo: "",
  //       requestorId: "matt-williams",
  //       url: "https://www.amazon.co.uk/PlayStation-9827054-Sony-VR/dp/B076BTTZCG?th=1",
  //       claimed: false,
  //       claimedBy: "",
  //       lastUpdated: ""
  //     },
  //     {
  //       id: "la-noire",
  //       title: "LA Noire",
  //       extraInfo: "Nintendo Switch",
  //       requestorId: "matt-williams",
  //       url: "https://www.amazon.co.uk/Rockstar-Games-NS66976-Nintendo-Switch/dp/B075KFVY1V",
  //       claimed: false,
  //       claimedBy: "",
  //       lastUpdated: ""
  //     },
  //     {
  //       id: "funny-apron-and-oven-mitts",
  //       title: "Funny Apron and Oven Mitts",
  //       extraInfo: "",
  //       requestorId: "natasha-warnock",
  //       url: "",
  //       claimed: false,
  //       claimedBy: "",
  //       lastUpdated: ""
  //     }
  //   ]
  // };

  describe('loadAllItems', () => {
    it('should create an action to get list items'/*, () => {
      // arrange
      const dispatch = jest.fn();
      const expected = [
        [{
          type: types.BEGIN_AJAX_CALL,
        }],
        [{
          type: types.LOAD_ITEMS_SUCCESS,
          items: appState.items
        }]
      ];

      // act
      itemActions.loadItems(appState)(dispatch);

      // assert
      // we expect this to return a function since it is a thunk
      expect(typeof (itemActions.loadItems(appState))).toEqual('function');

      // finally assert that the dispatch was called with our expected actions
      expect(dispatch.mock.calls[0][0]).toEqual(expected[0][0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1][0]);
    }*/);

    it('should return all list items'/*, () => {
      // arrange
      const dispatch = jest.fn();
      const expected = [
        { items: appState.items }
      ];

      // act
      itemActions.loadItems(appState)(dispatch);

      // assert
      expect(dispatch.mock.calls[0][1]).toEqual(expected[0][0]);
    }*/);
  });
});

import * as types from '../constants/actionTypes';
import * as itemActions from './itemActions';

describe('Actions', () => {
  const appState = {
    items: [
      {
        id: "playstation-vr",
        title: "Playstation VR",
        extraInfo: "",
        requestorId: "matt-williams",
        url: "https://www.amazon.co.uk/PlayStation-9827054-Sony-VR/dp/B076BTTZCG?th=1",
        claimed: false,
        claimedBy: "",
        lastUpdated: ""
      },
      {
        id: "la-noire",
        title: "LA Noire",
        extraInfo: "Nintendo Switch",
        requestorId: "matt-williams",
        url: "https://www.amazon.co.uk/Rockstar-Games-NS66976-Nintendo-Switch/dp/B075KFVY1V",
        claimed: false,
        claimedBy: "",
        lastUpdated: ""
      },
      {
        id: "funny-apron-and-oven-mitts",
        title: "Funny Apron and Oven Mitts",
        extraInfo: "",
        requestorId: "natasha-warnock",
        url: "",
        claimed: false,
        claimedBy: "",
        lastUpdated: ""
      }
    ]
  };

  it('should create an action to get all list items', () => {
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

    // we expect this to return a function since it is a thunk
    expect(typeof (itemActions.loadItems(appState))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    itemActions.loadItems(appState)(dispatch);
    // finally assert that the dispatch was called with our expected actions
    expect(dispatch.mock.calls).toEqual(expected);
    // expect(dispatch.mock.calls[1]).toEqual(expected[1]);
  });

  // it('should create an action to calculate fuel savings', () => {
  //   const fieldName = 'newMpg';
  //   const value = 100;
  //   const actual = ActionCreators.calculateFuelSavings(appState, fieldName, value);
  //   const expected = {
  //     type: ActionTypes.CALCULATE_FUEL_SAVINGS,
  //     dateModified,
  //     settings: appState,
  //     fieldName,
  //     value
  //   };

  //   expect(actual).toEqual(expected); // Notice use of deep because it's a nested object
  //   // expect(actual).to.equal(expected); // Fails. Not deeply equal
  // });
});

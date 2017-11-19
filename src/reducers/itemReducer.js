import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function itemReducer(state = initialState.items, action) {
  switch(action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;

    case types.UPDATE_ITEM_SUCCESS:
      return [
        ...state.filter(item => item.id !== action.item.id),
        Object.assign({}, action.item)
      ];

    default:
      return state;
  }
}

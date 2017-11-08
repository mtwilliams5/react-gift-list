import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function requestorReducer(state = initialState.requestors, action) {
  switch(action.type) {
    case types.LOAD_REQUESTORS_SUCCESS:
      return action.requestors;

    default:
      return state;
  }
}

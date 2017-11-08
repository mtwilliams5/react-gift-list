import * as types from '../constants/actionTypes';
import itemApi from '../api/mockItemsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items };
}

export function loadItems(state) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return state ? dispatch(loadItemsSuccess(state.items)) : itemApi.getAllItems().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

// export function loadItemsByRequestor(requestor) {
//   return function(dispatch) {
//     dispatch(beginAjaxCall());
//     return itemApi.getItemsByRequestor(requestor).then(items => {
//       dispatch(loadItemsSuccess(items));
//     }).catch(error => {
//       dispatch(ajaxCallError(error));
//       throw(error);
//     });
//   };
// }

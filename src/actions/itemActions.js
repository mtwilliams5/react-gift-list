import * as types from '../constants/actionTypes';
import ItemApi from '../api/mockItemsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items };
}

export function updateItemSuccess(item) {
  return { type: types.UPDATE_ITEM_SUCCESS, item };
}

export function loadItems() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ItemApi.getAllItems().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function updateItem(item) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return ItemApi.saveItem(item).then(savedItem => {
      dispatch(updateItemSuccess(savedItem));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

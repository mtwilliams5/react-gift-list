import * as types from '../constants/actionTypes';
import RequestorApi from '../api/mockRequestorsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadRequestorsSuccess(requestors) {
  return { type: types.LOAD_REQUESTORS_SUCCESS, requestors };
}

export function loadRequestors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return RequestorApi.getAllRequestors().then(requestors => {
      dispatch(loadRequestorsSuccess(requestors));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

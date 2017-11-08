import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import items from './itemReducer';
import requestors from './requestorReducer';

const rootReducer = combineReducers({
  items,
  requestors,
  routing: routerReducer
});

export default rootReducer;

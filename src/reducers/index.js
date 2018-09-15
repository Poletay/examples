import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
// import * as actions from '../actions';

const mainMenuItems = handleActions({}, {});

export default combineReducers({
  mainMenuItems,
});

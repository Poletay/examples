import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const currentLocation = handleActions({
  [actions.changeLocation](state, { payload: { location } }) {
    return location;
  },
}, {});

export default combineReducers({
  currentLocation,
});

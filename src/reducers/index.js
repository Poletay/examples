import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const currentLocation = handleActions({
  [actions.changeLocation](state, { payload: { location } }) {
    return location;
  },
}, {});

const algorithms = handleActions({
  [actions.applyAlgorithm](state, { payload: { algorithmName, algorithmFunc, entryData } }) {
    const resultData = algorithmFunc(entryData);
    return {
      ...state,
      [algorithmName]: {
        entryData,
        resultData,
      },
    };
  },
}, {});

export default combineReducers({
  currentLocation,
  algorithms,
});

import {combineReducers} from 'redux';
import {reducer as schoolReducer} from './Schools/reducers';

export const reducer = combineReducers({
  school: schoolReducer,
});

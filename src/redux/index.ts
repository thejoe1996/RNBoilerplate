import {combineReducers} from 'redux';
import schoolReducer from './slices/Schools';

export default combineReducers({
  school: schoolReducer,
});

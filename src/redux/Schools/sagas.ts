import { takeEvery, put } from 'redux-saga/effects';
import { GET_ALL_SCHOOLS, GET_ALL_SCHOOLS_SUCCESS } from "./actions";
import { SchoolAction } from './reducers';

export function* handler() {
  yield takeEvery(GET_ALL_SCHOOLS, getAllUserInfo);
}

function* getAllUserInfo(action: SchoolAction) {
  try {
    // This should be an API call 
    // this is temporary to test saga
    yield put({
      type: GET_ALL_SCHOOLS_SUCCESS,
      payload: {
        data: ['School 1', 'School 2'],
        fetching: false,
        error: false,
      },
    });
  } catch (err) {
    // Handle error
  }
}
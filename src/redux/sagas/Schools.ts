import {put} from 'redux-saga/effects';
import {getAllSchoolsSuccess} from '../slices/Schools';
import type {SchoolsActionType} from '../slices/Schools';
import {PayloadAction} from '@reduxjs/toolkit';

export function* getAllUserInfo(action: PayloadAction<SchoolsActionType>) {
  try {
    // This should be an API call
    // this is temporary to test saga
    yield put({
      type: getAllSchoolsSuccess.type,
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

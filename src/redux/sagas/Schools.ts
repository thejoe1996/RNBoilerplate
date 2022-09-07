import {put} from 'redux-saga/effects';
import {getAllSchoolsSuccess} from '../slices/Schools';
import type {SchoolsActionType} from '../slices/Schools';
import {PayloadAction} from '@reduxjs/toolkit';

export function* getAllUserInfo({payload}: PayloadAction<SchoolsActionType>) {
  try {
    // This should be an API call
    // this is temporary to test saga
    yield put({
      type: getAllSchoolsSuccess.type,
      payload: {
        data: payload.data,
        fetching: false,
        error: false,
      },
    });
  } catch (err) {
    // Handle error
  }
}

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, Slice } from '@reduxjs/toolkit'
import { takeEvery, put } from 'redux-saga/effects';

// Define a type for the slice state
type SchoolsState = {
  data: any;
  fetching: boolean;
  error: null | boolean;
}

export type SchoolsActionType = {
  data: any;
}

// Define the initial state using that type
const initialState: SchoolsState = {
  data: [],
  fetching: false,
  error: null,
}

export const schoolsSlice: Slice<SchoolsState> = createSlice({
  name: 'schools',
  initialState,
  reducers: {
    getAllSchoolsRequest: (state: SchoolsState, { payload }: PayloadAction<SchoolsActionType>) => ({
      data: payload.data,
      fetching: true,
      error: false,
    }),
    getAllSchoolsSuccess: (state, { payload }: PayloadAction<SchoolsActionType>) => ({
      data: payload.data,
      fetching: false,
      error: false,
    }),
    getAllSchoolsFailure: (state: SchoolsState, { payload }: PayloadAction<SchoolsActionType>) => ({
      data: payload.data,
      fetching: false,
      error: true,
    }),
  },
})

export const { getAllSchoolsRequest, getAllSchoolsSuccess, getAllSchoolsFailure } = schoolsSlice.actions

export function* handler() {
  yield takeEvery(getAllSchoolsRequest.type, getAllUserInfo);
}

function* getAllUserInfo(action: SchoolsActionType) {
  try {
    // This should be an API call 
    // this is temporary to test saga
    yield put(getAllSchoolsSuccess);
  } catch (err) {
    // Handle error
  }
}

export default schoolsSlice.reducer
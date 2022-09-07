import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction, Slice} from '@reduxjs/toolkit';

// Define a type for the slice state
export type SchoolsState = {
  data: any;
  fetching: boolean;
  error: null | boolean;
};

// Define the initial state using that type
const initialState: SchoolsState = {
  data: [],
  fetching: false,
  error: null,
};

export type SchoolsActionType = {
  data: any;
};

export const schoolsSlice: Slice<SchoolsState> = createSlice({
  name: 'schools',
  initialState,
  reducers: {
    getAllSchoolsRequest: (
      state: SchoolsState,
      {payload}: PayloadAction<SchoolsActionType>,
    ) => ({
      data: payload.data,
      fetching: true,
      error: false,
    }),
    getAllSchoolsSuccess: (
      state,
      {payload}: PayloadAction<SchoolsActionType>,
    ) => ({
      data: payload.data,
      fetching: false,
      error: false,
    }),
    getAllSchoolsFailure: (
      state: SchoolsState,
      {payload}: PayloadAction<SchoolsActionType>,
    ) => ({
      data: payload.data,
      fetching: false,
      error: true,
    }),
  },
});

export const {
  getAllSchoolsRequest,
  getAllSchoolsSuccess,
  getAllSchoolsFailure,
} = schoolsSlice.actions;

export default schoolsSlice.reducer;

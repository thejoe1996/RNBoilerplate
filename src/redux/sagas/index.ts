import { takeLatest } from 'redux-saga/effects';
import { getAllSchoolsRequest } from '../slices/Schools';
import { getAllUserInfo } from './Schools';

export default function* root() {
  yield takeLatest(getAllSchoolsRequest, getAllUserInfo);
}

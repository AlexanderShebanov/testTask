import { all } from 'redux-saga/effects';

import { sitesSaga } from './sites';

export default function* rootSaga() {
  yield all([sitesSaga()]);
}

import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { siteSlice } from '#redux/slices/sitesSlice';
import { IApiGetSitesSuccessResponse } from '#services/api/apiResponseTypes';

function* watchGetSites() {
  const response: IApiGetSitesSuccessResponse = yield call(
    axios.get,
    'https://6389df1b4eccb986e89cf319.mockapi.io/external-verification/websites',
  );

  if ('data' in response) {
    yield put(
      siteSlice.actions.getSitesSuccess({
        sites: response.data,
      }),
    );
  } else {
    yield put(siteSlice.actions.getSitesError('get sites error'));
  }
}

export function* sitesSaga() {
  // Sites
  yield takeLatest(siteSlice.actions.getSites, watchGetSites);
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISite } from '../../models.ts';
import { IGetSitesInfo } from '../types/sitesTypes';

interface ISiteState {
  sites: {
    data: ISite[];
  };
}

const INITIAL_STATE: ISiteState = {
  sites: {
    data: [],
  },
};

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
export const siteSlice = createSlice({
  name: 'site',
  initialState: INITIAL_STATE,
  reducers: {
    getSites(state, action: PayloadAction) {},
    getSitesSuccess(
      state,
      { payload: sitesInfo }: PayloadAction<IGetSitesInfo>,
    ) {
      state.sites.data = sitesInfo.sites;
    },
    getSitesError(state, action: PayloadAction<string>) {},
  },
});

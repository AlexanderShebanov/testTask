import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

import { ErrorType, LoadingType } from '../types';

import { siteSlice } from '#redux/slices/sitesSlice';

export interface IAppState {
  loading: Record<LoadingType, boolean>;
  errors: Record<ErrorType, string | null>;
}

const INITIAL_STATE: IAppState = {
  loading: {
    isGetSites: false,
  },
  errors: {
    getSites: null,
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setError(
      state,
      {
        payload: { error, errorType },
      }: PayloadAction<{ errorType: ErrorType; error: string }>,
    ) {
      state.errors[errorType] = error;
    },
    resetErrors(state) {
      state.errors = cloneDeep(INITIAL_STATE.errors);
    },
  },

  extraReducers: builder => {
    // Get posts
    builder.addCase(siteSlice.actions.getSites, state => {
      state.loading[LoadingType.isGetSites] = true;
      state.errors[ErrorType.getSites] = null;
    });
    builder.addCase(siteSlice.actions.getSitesSuccess, state => {
      state.loading[LoadingType.isGetSites] = false;
    });
    builder.addCase(siteSlice.actions.getSitesError, (state, action) => {
      state.loading[LoadingType.isGetSites] = false;
      state.errors[ErrorType.getSites] = action.payload;
    });
  },
});

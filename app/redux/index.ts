import AsyncStorage from '@react-native-community/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, StoreEnhancer } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import reactotron from '../services/reactotron';

import { appSlice } from './slices';

import { siteSlice } from '#redux/slices/sitesSlice';

// Reducers

export const rootReducer = combineReducers({
  app: appSlice.reducer,
  sites: siteSlice.reducer,
});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMonitor = reactotron?.createSagaMonitor!();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancers: StoreEnhancer[] = [applyMiddleware(sagaMiddleware)];

if (reactotron) {
  enhancers.push(reactotron?.createEnhancer!());
}

export const store = configureStore({
  reducer: persistedReducer,
  enhancers,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// Unсomment this line to clear the cache
// persistor.purge();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

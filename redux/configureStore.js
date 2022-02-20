// import { combineReducers, createStore } from "redux";
import authReducer from '../redux/ducks/auth';
import profileReducer from '../redux/ducks/profile';

// //we'll have multiple reducers
// const reducer = combineReducers({
//     auth: authReducer
// })
// //won't work unless we pass a reducer into our createStore function
// const store = createStore(reducer);


import { useMemo } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

let store;

const persistedReducer = persistCombineReducers(
  { key: 'primary', storage, blacklist: [] },
  {
      auth: authReducer,
      profile: profileReducer,
  }
);

const makeStore = (initialState = {}) => createStore(
  persistedReducer,
  initialState,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk))
);

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState) => {
  return useMemo(() => initializeStore(initialState), [initialState]);
};


// export default store;

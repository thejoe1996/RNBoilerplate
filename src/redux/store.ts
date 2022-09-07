import createSagaMiddleware from 'redux-saga';
import reducer from './index';
import sagas from './sagas';

import { configureStore } from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    // disable thunk since saga is going to be used
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
})
sagaMiddleware.run(sagas);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./index', () => store.replaceReducer(reducer))
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
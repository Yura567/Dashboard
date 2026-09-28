import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import reportsReducer, { reportsSaga } from './ducks/reports'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { reports: reportsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(reportsSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
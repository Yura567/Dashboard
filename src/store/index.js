import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reportsReducer, { reportsSaga } from './ducks/reports.js'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { reports: reportsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(reportsSaga)
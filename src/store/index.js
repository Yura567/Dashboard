import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import dashboardReducer, { dashboardSaga } from './dashboard.js'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  dashboardReducer,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(dashboardSaga)

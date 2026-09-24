import { call, put, takeLatest } from 'redux-saga/effects'

const DASHBOARD_DATA_REQUEST = 'dashboard/dataRequest'
const DASHBOARD_DATA_SUCCESS = 'dashboard/dataSuccess'
const DASHBOARD_DATA_FAILURE = 'dashboard/dataFailure'

const initialState = {
  data: null,
  loading: false,
  error: null,
}

export const requestDashboardData = () => ({ type: DASHBOARD_DATA_REQUEST })

const dashboardDataSuccess = (data) => ({
  type: DASHBOARD_DATA_SUCCESS,
  payload: data,
})

const dashboardDataFailure = (error) => ({
  type: DASHBOARD_DATA_FAILURE,
  payload: error,
})

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_DATA_REQUEST:
      return { ...state, loading: true, error: null }
    case DASHBOARD_DATA_SUCCESS:
      return { data: action.payload, loading: false, error: null }
    case DASHBOARD_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export function* fetchDashboardData() {
  try {
    const response = yield call(fetch, '/dashboard.json')
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`)

    const data = yield call([response, 'json'])
    yield put(dashboardDataSuccess(data))
  } catch (error) {
    yield put(dashboardDataFailure(error.message))
  }
}

export function* dashboardSaga() {
  yield takeLatest(DASHBOARD_DATA_REQUEST, fetchDashboardData)
}
import { createSlice } from '@reduxjs/toolkit'
import { call, put, takeLatest } from 'redux-saga/effects'

const initialState = {
  items: [
    { title: 'Design review', time: '09:30 AM', color: 'blue' },
    { title: 'Marketing sync', time: '11:00 AM', color: 'purple' },
    { title: 'Campaign launch', time: '02:00 PM', color: 'green' },
  ],
  status: 'idle',
  error: null,
}

const reportsSlice = createSlice({
  name: 'dashboard/reports',
  initialState,
  reducers: {
    createReportRequested(state) {
      state.status = 'loading'
      state.error = null
    },
    createReportSucceeded(state, action) {
      state.items.unshift({
        title: action.payload.title,
        time: 'Just now',
        color: 'blue',
        id: action.payload.id,
      })
      state.status = 'succeeded'
    },
    createReportFailed(state, action) {
      state.status = 'failed'
      state.error = action.payload
    },
    clearReportError(state) {
      state.error = null
      state.status = 'idle'
    },
  },
})

export const {
  createReportRequested,
  createReportSucceeded,
  createReportFailed,
  clearReportError,
} = reportsSlice.actions

const reportsApiUrl = import.meta.env.VITE_REPORTS_API_URL || 'https://jsonplaceholder.typicode.com/posts'

async function postReport(title) {
  const response = await fetch(reportsApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body: 'Dashboard report', userId: 1 }),
  })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}

function* createReportWorker(action) {
  try {
    const report = yield call(postReport, action.payload.title)
    yield put(createReportSucceeded({ id: report.id, title: report.title || action.payload.title }))
  } catch (error) {
    yield put(createReportFailed(error instanceof Error ? error.message : 'Unable to create report'))
  }
}

export function* reportsSaga() {
  yield takeLatest(createReportRequested.type, createReportWorker)
}

export default reportsSlice.reducer
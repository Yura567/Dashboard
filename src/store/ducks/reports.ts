import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeLatest, type CallEffect, type PutEffect } from 'redux-saga/effects'
import type { SagaIterator } from 'redux-saga'

export interface ReportItem {
  title: string
  time: string
  color: 'blue' | 'purple' | 'green'
  id?: number
}

interface ReportsState {
  items: ReportItem[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

interface ReportResponse {
  id: number
  title?: string
}

const initialState: ReportsState = {
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
    createReportRequested(state, _action: PayloadAction<{ title: string }>) {
      state.status = 'loading'
      state.error = null
    },
    createReportSucceeded(state, action: PayloadAction<{ id: number; title: string }>) {
      state.items.unshift({
        title: action.payload.title,
        time: 'Just now',
        color: 'blue',
        id: action.payload.id,
      })
      state.status = 'succeeded'
    },
    createReportFailed(state, action: PayloadAction<string>) {
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

async function postReport(title: string): Promise<ReportResponse> {
  const response = await fetch(reportsApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body: 'Dashboard report', userId: 1 }),
  })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json() as Promise<ReportResponse>
}

function* createReportWorker(
  action: PayloadAction<{ title: string }>,
): Generator<
  CallEffect<ReportResponse> | PutEffect<PayloadAction<{ id: number; title: string }>> | PutEffect<PayloadAction<string>>,
  void,
  ReportResponse
> {
  try {
    const report = yield call(postReport, action.payload.title)
    yield put(createReportSucceeded({ id: report.id, title: report.title || action.payload.title }))
  } catch (error) {
    yield put(createReportFailed(error instanceof Error ? error.message : 'Unable to create report'))
  }
}

export function* reportsSaga(): SagaIterator {
  yield takeLatest(createReportRequested.type, createReportWorker)
}

export default reportsSlice.reducer
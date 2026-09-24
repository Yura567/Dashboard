import { Route, Routes } from 'react-router-dom'
import DashboardApp from './components/DashboardApp.jsx'

export default function App() {
  return <Routes><Route path="*" element={<DashboardApp />} /></Routes>
}

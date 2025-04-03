
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Routes will be defined here */}
      </Route>
    </Routes>
  )
}

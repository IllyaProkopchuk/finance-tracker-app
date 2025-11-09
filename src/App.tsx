import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './Layout/Layout.tsx'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
)

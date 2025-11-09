import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Layout from '@/Layout/Layout.tsx'
import Expenses from '@/pages/Expenses/Expenses.js'
import Approvals from '@/pages/Approvals/Approvals.js'
import Trips from '@/pages/Trips/Trips.js'
import Support from '@/pages/Support/Support.js'

import './index.css'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/approvals" element={<Approvals />} />
      <Route path="/support" element={<Support />} />
    </Route>
  )
)

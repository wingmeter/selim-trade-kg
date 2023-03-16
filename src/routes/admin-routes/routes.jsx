/* eslint-disable prettier/prettier */
import React from 'react'

const CreateGate = React.lazy(() =>
   import('../../admin/pages/gates/CreateGate')
)

const Dashboard = React.lazy(() =>
   import('../../admin/pages/dashboard/Dashboard')
)
const Gates = React.lazy(() => import('../../admin/pages/gates/Gates'))

// Base

const routes = [
   { path: '/', exact: true, name: 'Home' },
   { path: '/dashboard', name: 'Dashboard', element: Dashboard },
   { path: '/gates', name: 'Gates', element: Gates },
   { path: '/gates/create', name: 'Create Gate', element: CreateGate },
]

export default routes

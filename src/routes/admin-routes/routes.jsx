/* eslint-disable prettier/prettier */
import React from 'react'

const Dashboard = React.lazy(() =>
   import('../../admin/pages/dashboard/Dashboard')
)

// Base

const routes = [
   { path: '/', exact: true, name: 'Home' },
   { path: '/dashboard', name: 'Dashboard', element: Dashboard },
]

export default routes

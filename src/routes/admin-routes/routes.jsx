/* eslint-disable prettier/prettier */
import React from 'react'

const CreateGate = React.lazy(() =>
   import('../../admin/pages/gate-types/gates/CreateGateForm')
)

const Dashboard = React.lazy(() =>
   import('../../admin/pages/dashboard/Dashboard')
)
const CreateGateType = React.lazy(() =>
   import('../../admin/pages/gate-types/CreateGateTypeForm')
)
const GateTypesView = React.lazy(() =>
   import('../../admin/pages/gate-types/GateTypesView')
)
const GateTypesInnerView = React.lazy(() =>
   import('../../admin/pages/gate-types/GateTypesInnerView')
)

// Base

const routes = [
   { path: '/', exact: true, name: 'Home' },
   { path: '/dashboard', name: 'Dashboard', element: Dashboard },
   { path: '/gates/create', name: 'Create Gate', element: CreateGate },
   {
      path: '/gate-types/create',
      name: 'Create Gate Type',
      element: CreateGateType,
   },
   { path: '/gate-types', name: 'Gate Types', element: GateTypesView },
   {
      path: '/gate-types/:typeId',
      name: 'Gate Types Inner Page',
      element: GateTypesInnerView,
   },
   {
      path: '/gate-types/:typeId/gate/create',
      name: 'Gate Types Inner Page',
      element: CreateGate,
   },
]

export default routes

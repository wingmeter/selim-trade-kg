/* eslint-disable prettier/prettier */
import React from 'react'

const CreateGate = React.lazy(() =>
   import('../../admin/pages/gates/CreateGate')
)

const Dashboard = React.lazy(() =>
   import('../../admin/pages/dashboard/Dashboard')
)
const Gates = React.lazy(() => import('../../admin/pages/gates/Gates'))
const CreateGateType = React.lazy(() =>
   import('../../admin/pages/gate-types/CreateGateType')
)
const GateTypes = React.lazy(() =>
   import('../../admin/pages/gate-types/GateTypes')
)
const GateTypesInner = React.lazy(() =>
   import('../../admin/pages/gate-types/GateTypesInner')
)

// Base

const routes = [
   { path: '/', exact: true, name: 'Home' },
   { path: '/dashboard', name: 'Dashboard', element: Dashboard },
   { path: '/gates', name: 'Gates', element: Gates },
   { path: '/gates/create', name: 'Create Gate', element: CreateGate },
   { path: '/gate-types/create', name: 'Create Gate Type', element: CreateGateType },
   { path: '/gate-types', name: 'Gate Types', element: GateTypes },
   { path: '/gate-types/:typeId', name: 'Gate Types Inner Page', element: GateTypesInner },
   { path: '/gate-types/:typeId/gate/create', name: 'Gate Types Inner Page', element: CreateGate },

]

export default routes

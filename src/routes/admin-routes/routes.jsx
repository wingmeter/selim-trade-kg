/* eslint-disable prettier/prettier */
import React from 'react'

const WorksView = React.lazy(() => import('../../admin/pages/works/WorksView'))
const WorksInner = React.lazy(() =>
   import('../../admin/pages/works/WorksInner')
)

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
      path: 'gate-types/:typeId/gate/edit/:gateId',
      name: 'Edit Gate',
      element: CreateGate,
   },
   {
      path: '/gate-types/create',
      name: 'Create Gate Type',
      element: CreateGateType,
   },
   {
      path: '/gate-types/edit/:typeId',
      name: 'Edit Gate Type',
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
   {
      path: '/works',
      name: 'Our Works',
      element: WorksView,
   },
   {
      path: '/works/:worksId',
      name: 'Works Inner Page',
      element: WorksInner,
   },
]

export default routes

/* eslint-disable prettier/prettier */
import React from 'react'

import { ROLES } from '../../utils/constants'

const WorksView = React.lazy(() => import('../../admin/pages/works/WorksView'))
const WorksInner = React.lazy(() =>
   import('../../admin/pages/works/inner-pages/WorksInner')
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

// News

const News = React.lazy(() => import('../../admin/pages/news/NewsView'))

const CreateNewsForm = React.lazy(() =>
   import('../../admin/pages/news/inner-pages/CreateNewsForm')
)

const NewsInnerView = React.lazy(() =>
   import('../../admin/pages/news/inner-pages/NewsInnerView')
)
const WorksCreateFrom = React.lazy(() =>
   import('../../admin/pages/works/inner-pages/WorksCreateForm')
)

const AdminControlsView = React.lazy(() =>
   import('../../admin/pages/admin-controls/AdminControlsView')
)
const AdminControlInner = React.lazy(() =>
   import('../../admin/pages/admin-controls/inner-pages/AdminControlnner')
)
const AdminRegisterForm = React.lazy(() =>
   import('../../admin/pages/admin-controls/inner-pages/AdminRegisterForm')
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
   // News
   { path: '/news', name: 'News', element: News },
   {
      path: '/news/create',
      name: 'Create News',
      element: CreateNewsForm,
   },
   { path: '/news/:newsId/edit', name: 'Update News', element: CreateNewsForm },
   { path: '/news/:newsId', name: 'Create News', element: NewsInnerView },
   // Works
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
   // {
   //    path: '/works/:worksId/edit',
   //    name: 'Update Works',
   //    element: WorksCreateFrom,
   // },
   { path: '/works/create', name: 'Create Works', element: WorksCreateFrom },

   // admin controls
   {
      path: '/controls',
      name: 'Admin Controls',
      element: AdminControlsView,
      role: ROLES.SUPER_ADMIN,
   },
   {
      path: '/controls/:adminId',
      name: 'Admin Controls Inner',
      element: AdminControlInner,
      role: ROLES.SUPER_ADMIN,
   },
   {
      path: '/controls/:adminId/edit',
      name: 'Admin Controls Inner',
      element: AdminRegisterForm,
      role: ROLES.SUPER_ADMIN,
   },
   {
      path: '/controls/register',
      name: 'Admin Controls Inner',
      element: AdminRegisterForm,
      role: ROLES.SUPER_ADMIN,
   },
]

export default routes

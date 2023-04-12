/* eslint-disable prettier/prettier */
import React from 'react'

import { ROLES } from '../../utils/constants'

const OrderInnerInProgressPage = React.lazy(() =>
   import('../../admin/pages/order/OrderInnerInProgressPage')
)
const CreateOrderInProgressForm = React.lazy(() =>
   import('../../admin/pages/order/CreateOrderInProgressForm')
)

const WorksView = React.lazy(() => import('../../admin/pages/works/WorksView'))
const WorksInner = React.lazy(() =>
   import('../../admin/pages/works/inner-pages/WorksInner')
)

const OrderView = React.lazy(() => import('../../admin/pages/order/Order'))

const OrderInnerPage = React.lazy(() =>
   import('../../admin/pages/order/OrderInnerPage')
)

const CreateGate = React.lazy(() =>
   import('../../admin/pages/gate-types/gates/CreateGateForm')
)

const CreateAdvantage = React.lazy(() =>
   import('../../admin/pages/gate-types/advantages/CreateAdvantageForm')
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
const AdminEditForm = React.lazy(() =>
   import('../../admin/pages/admin-controls/inner-pages/AdminEditForm')
)

// Reviews

const CreateReviewForm = React.lazy(() =>
   import('../../admin/pages/reviews/inner-pages/CreateReviewForm')
)

const ReviewsInnerView = React.lazy(() =>
   import('../../admin/pages/reviews/inner-pages/ReviewsInnerView')
)

const ReviewsView = React.lazy(() =>
   import('../../admin/pages/reviews/ReviewsView')
)
const GateInnerView = React.lazy(() =>
   import('../../admin/components/gates-type/gates/GateInner')
)
const AdvantageInnerView = React.lazy(() =>
   import('../../admin/pages/gate-types/advantages/AdvantageInner')
)

// Base

const routes = [
   { path: '/', exact: true, name: 'Home' },
   { path: '/dashboard', name: 'Dashboard', element: Dashboard },
   {
      path: '/order',
      name: 'Orders',
      element: OrderView,
   },
   {
      path: '/order/:orderId/new-order',
      name: 'Order Inner Page',
      element: OrderInnerPage,
   },
   {
      path: '/order/:orderId/order-in-progress',
      name: 'OrderInProgress Inner Page',
      element: OrderInnerInProgressPage,
   },
   {
      path: '/order/:orderId/create',
      name: 'Order Create Page',
      element: CreateOrderInProgressForm,
   },
   {
      path: '/order/:orderId/edit',
      name: 'Order Update Page',
      element: CreateOrderInProgressForm,
   },

   // gate and gate types
   { path: '/gates/create', name: 'Create Gate', element: CreateGate },
   {
      path: 'gate-types/:typeId/gate/edit/:gateId',
      name: 'Edit Gate',
      element: CreateGate,
   },
   {
      path: 'gate-types/:typeId/gate/:gateId',
      name: 'Gate Inner View',
      element: GateInnerView,
   },
   {
      path: '/gate-types/create',
      name: 'Create Gate Type',
      element: CreateGateType,
   },
   {
      path: '/gate-types/:typeId/edit',
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
   // advantage
   {
      path: '/gate-types/:typeId/advantage/create',
      name: 'Advantage Form',
      element: CreateAdvantage,
   },
   {
      path: 'gate-types/:typeId/advantage/edit/:advantageId',
      name: 'Advantage Edit',
      element: CreateAdvantage,
   },
   {
      path: 'gate-types/:typeId/advantage/:advantageId',
      name: 'Advantage Inner View',
      element: AdvantageInnerView,
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
      element: AdminEditForm,
      role: ROLES.SUPER_ADMIN,
   },
   {
      path: '/controls/register',
      name: 'Admin Controls Inner',
      element: AdminRegisterForm,
      role: ROLES.SUPER_ADMIN,
   },
   // reviews
   { path: '/reviews', name: 'Reviews', element: ReviewsView },
   {
      path: '/reviews/create',
      name: 'Create News',
      element: CreateReviewForm,
   },
   {
      path: '/reviews/:reviewsId/edit',
      name: 'Update News',
      element: CreateReviewForm,
   },
   {
      path: '/reviews/:reviewsId',
      name: 'Create News',
      element: ReviewsInnerView,
   },
]

export default routes

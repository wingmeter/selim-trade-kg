/* eslint-disable prettier/prettier */
import React from 'react'

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

const WorksInnerView = React.lazy(() =>
   import('../../admin/pages/news/inner-pages/NewsInnerView')
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
      path: '/order/:orderId',
      name: 'Order Inner Page',
      element: OrderInnerPage,
   },
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

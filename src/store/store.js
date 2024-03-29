import { configureStore } from '@reduxjs/toolkit'

import { adminControlsApi } from './admin/admin-controls/adminControlApi'
import { authApi } from './admin/auth/authApi'
import authSlice from './admin/auth/authSlice'
import { gatesTypeApi } from './admin/gate-types/gateTypesApi'
import { newsApi } from './admin/news/newsApi'
import { orderApi } from './admin/order/orderApi'
import { reviewApi } from './admin/reviews/reviewApi'
import sidebarSlice from './admin/sidebar/sidebarSlice'
import { worksApi } from './admin/works/worksApi'
import { servicesApi } from './client/gateTypesApi'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      sidebar: sidebarSlice.reducer,

      [authApi.reducerPath]: authApi.reducer,
      [gatesTypeApi.reducerPath]: gatesTypeApi.reducer,
      [newsApi.reducerPath]: newsApi.reducer,

      [reviewApi.reducerPath]: reviewApi.reducer,
      [worksApi.reducerPath]: worksApi.reducer,
      [orderApi.reducerPath]: orderApi.reducer,
      [adminControlsApi.reducerPath]: adminControlsApi.reducer,
      [servicesApi.reducerPath]: servicesApi.reducer,
   },
   middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(
         authApi.middleware,
         gatesTypeApi.middleware,
         newsApi.middleware,
         reviewApi.middleware,
         worksApi.middleware,
         adminControlsApi.middleware,
         orderApi.middleware,
         servicesApi.middleware
      ),
})
export default store

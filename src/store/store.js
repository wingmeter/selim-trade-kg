import { configureStore } from '@reduxjs/toolkit'

import { authApi } from './admin/auth/authApi'
import authSlice from './admin/auth/authSlice'
import { gatesTypeApi } from './admin/gate-types/gateTypesApi'
import { newsApi } from './admin/news/newsApi'
import { reviewApi } from './admin/reviews/reviewApi'
import sidebarSlice from './admin/sidebar/sidebarSlice'
import { worksApi } from './admin/works/worksApi'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      sidebar: sidebarSlice.reducer,

      [authApi.reducerPath]: authApi.reducer,
      [gatesTypeApi.reducerPath]: gatesTypeApi.reducer,
      [newsApi.reducerPath]: newsApi.reducer,

      [reviewApi.reducerPath]: reviewApi.reducer,
      [worksApi.reducerPath]: worksApi.reducer,
   },
   middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(
         authApi.middleware,
         gatesTypeApi.middleware,
         newsApi.middleware,
         reviewApi.middleware,
         worksApi.middleware
      ),
})

export default store

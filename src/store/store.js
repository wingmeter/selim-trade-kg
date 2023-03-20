import { configureStore } from '@reduxjs/toolkit'

import { authApi } from './admin/auth/authApi'
import authSlice from './admin/auth/authSlice'
import { gatesTypeApi } from './admin/gate-types/gateTypesApi'
import { newsApi } from './admin/news/newsApi'
import sidebarSlice from './admin/sidebar/sidebarSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      sidebar: sidebarSlice.reducer,

      [authApi.reducerPath]: authApi.reducer,

      [gatesTypeApi.reducerPath]: gatesTypeApi.reducer,

      [newsApi.reducerPath]: newsApi.reducer,
   },
   middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(
         authApi.middleware,
         gatesTypeApi.middleware,
         newsApi.middleware
      ),
})

export default store

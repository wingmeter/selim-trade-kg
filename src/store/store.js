import { configureStore } from '@reduxjs/toolkit'

import { authApi } from './admin/auth/authApi'
import authSlice from './admin/auth/authSlice'
import { gatesTypeApi } from './admin/gate-types/gateTypesApi'
import { gatesApi } from './admin/gates/gatesApi'
import sidebarSlice from './admin/sidebar/sidebarSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      sidebar: sidebarSlice.reducer,

      [authApi.reducerPath]: authApi.reducer,
      [gatesApi.reducerPath]: gatesApi.reducer,
      [gatesTypeApi.reducerPath]: gatesTypeApi.reducer,
   },
   middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(
         authApi.middleware,
         gatesApi.middleware,
         gatesTypeApi.middleware
      ),
})

export default store

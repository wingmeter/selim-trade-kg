import { configureStore } from '@reduxjs/toolkit'

import { authApi } from './admin/auth/authApi'
import authSlice from './admin/auth/authSlice'
import sidebarSlice from './admin/sidebar/sidebarSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      sidebar: sidebarSlice.reducer,

      [authApi.reducerPath]: authApi.reducer,
   },
   middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(authApi.middleware),
})

export default store

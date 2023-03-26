import { createSlice } from '@reduxjs/toolkit'

import { AUTH_KEY, TOKEN_KEY } from '../../../utils/constants'
import {
   getFromLocalStorage,
   saveToLocalStorage,
} from '../../../utils/helpers/general'

const initState = {
   role: getFromLocalStorage(TOKEN_KEY)?.role || null,
   token: getFromLocalStorage(TOKEN_KEY)?.token || null,
   refreshToken: getFromLocalStorage(TOKEN_KEY)?.refreshToken || null,
   adminData: getFromLocalStorage(AUTH_KEY) || null,
}

const authSlice = createSlice({
   name: 'auth',
   initialState: initState,
   reducers: {
      saveData(state, action) {
         const adminData = action.payload
         state.role = adminData?.admin?.roles?.[0]
         state.token = adminData?.accessToken
         state.refreshToken = adminData?.refreshToken
         state.adminData = adminData?.admin
         saveToLocalStorage(TOKEN_KEY, {
            token: adminData?.accessToken,
            role: adminData?.admin?.roles?.[0],
            refreshToken: adminData?.refreshToken,
         })
         saveToLocalStorage(AUTH_KEY, adminData?.admin)
      },
   },
})
export const authActions = authSlice.actions
export default authSlice

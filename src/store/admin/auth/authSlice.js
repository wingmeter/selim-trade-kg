import { createSlice } from '@reduxjs/toolkit'

import { TOKEN_KEY } from '../../../utils/constants'
import {
   getFromLocalStorage,
   saveToLocalStorage,
} from '../../../utils/helpers/general'

const initState = {
   role: getFromLocalStorage(TOKEN_KEY)?.role || null,
   token: getFromLocalStorage(TOKEN_KEY)?.token || null,
   refreshToken: getFromLocalStorage(TOKEN_KEY)?.refreshToken || null,
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
         saveToLocalStorage(TOKEN_KEY, {
            token: adminData?.accessToken,
            role: adminData?.admin?.roles?.[0],
            refreshToken: adminData?.refreshToken,
         })
      },
   },
})
export const authActions = authSlice.actions
export default authSlice

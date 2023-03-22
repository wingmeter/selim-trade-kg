import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

import { BASE_URL } from '../utils/constants'
import { logOut } from '../utils/helpers/general'

import { authActions } from './admin/auth/authSlice'
// import { logOut, saveToSessionStorage } from '../utils/helpers'

const baseQuery = fetchBaseQuery({
   baseUrl: BASE_URL,
   prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth
      if (token) {
         headers.set('authorization', `Bearer ${token}`)
      }
      return headers
   },
})

export const baseQueryWithReauth = async (args, api, extraOptions) => {
   let result = await baseQuery(args, api, extraOptions)
   if (result?.error?.status === 401 || result?.response?.status === 401) {
      const refreshResult = await baseQuery('api/v1/auth/refresh-token', api, {
         ...extraOptions,
         refreshToken: api.getState.auth.refreshToken,
      })
      console.log(refreshResult)
      alert('token refreshed', refreshResult)
      if (refreshResult.data) {
         api.dispatch(authActions.saveData(refreshResult.data))
         // retry the original query with new access token
         result = await baseQuery(args, api, extraOptions)
      } else {
         logOut()
      }
   } else if (
      result?.error?.status === 403 ||
      result?.response?.status === 403
   ) {
      logOut()
   }
   return result
}

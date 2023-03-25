/* eslint-disable no-alert */
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

import { BASE_URL } from '../utils/constants'
import { logOut } from '../utils/helpers/general'

import { authActions } from './admin/auth/authSlice'

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
      const newArgs = {
         url: 'api/v1/auth/refresh-token',
         method: 'POST',
         body: { refreshToken: api.getState().auth.refreshToken },
      }
      const refreshResult = await baseQuery(newArgs, api, extraOptions)

      console.log('token refreshed', refreshResult.data)

      if (refreshResult?.data) {
         api.dispatch(authActions.saveData(refreshResult?.data))
         // retry the original query with new access token
         result = await baseQuery(args, api, extraOptions)
      } else {
         alert(
            result?.data?.message ||
               'Your access is expired, please log in again'
         )
         logOut()
      }
   } else if (
      result?.error?.status === 403 ||
      result?.response?.status === 403
   ) {
      alert(result?.data?.message || 'Something went wrong')
   }
   return result
}

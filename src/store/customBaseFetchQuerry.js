import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

import { BASE_URL } from '../utils/constants'
import { logOut } from '../utils/helpers/general'
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
   const result = await baseQuery(args, api, extraOptions)
   if (result?.error?.status === 403 || result?.response?.status === 403) {
      logOut()
   } else if (result?.error?.status === 401 || result?.response?.status) {
      logOut()
   }
   return result
}

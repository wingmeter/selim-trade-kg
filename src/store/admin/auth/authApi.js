import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '../../customBaseFetchQuerry'

export const authApi = createApi({
   reducerPath: 'authApi',
   baseQuery: baseQueryWithReauth,
   endpoints: (build) => ({
      refreshToken: build.mutation({
         query: (body) => ({
            url: 'api/v1/auth/refresh-token',
            method: 'POST',
            body,
         }),
      }),
      loginAdmin: build.mutation({
         query: (body) => ({
            url: 'api/v1/auth/login',
            method: 'POST',
            body,
         }),
      }),
   }),
})

export const { useLoginAdminMutation, useRefreshTokenMutation } = authApi

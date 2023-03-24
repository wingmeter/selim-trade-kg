import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '../../customBaseFetchQuerry'

export const adminControlsApi = createApi({
   reducerPath: 'adminControlsApi',
   baseQuery: baseQueryWithReauth,
   tagTypes: ['Work', 'Admins'],
   endpoints: (build) => ({
      // ------------------------------get all
      getAllAdmins: build.query({
         query: ({ page, filter }) => ({
            url: 'api/v1/admin',
            method: 'GET',
            // filter need to fix
            params: { page, size: 8, filter },
         }),
         providesTags: ['Admins'],
      }),

      // -----------------------------get by id method
      getWorksById: build.query({
         query: (workId) => ({
            url: `api/v1/work/${workId}`,
            method: 'GET',
         }),
         providesTags: ['Work'],
      }),

      // ------------------------------post method
      updateAdmin: build.mutation({
         query: (formData, adminId) => ({
            url: `api/v1/admin/${adminId}`,
            method: 'PUT',
            body: formData,
         }),
         invalidatesTags: ['Admins'],
      }),

      // ------------------------------delete method
      enableAdmin: build.mutation({
         query: (workId) => ({
            url: `api/v1/work/${workId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['AllWorks'],
      }),
   }),
})

export const { useGetAllAdminsQuery, useUpdateAdminMutation } = adminControlsApi

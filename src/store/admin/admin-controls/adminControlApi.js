import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '../../customBaseFetchQuerry'

export const adminControlsApi = createApi({
   reducerPath: 'adminControlsApi',
   baseQuery: baseQueryWithReauth,
   tagTypes: ['GetAdmin', 'Admins'],
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
      getAdminById: build.query({
         query: (adminId) => ({
            url: `api/v1/admin/${adminId}`,
            method: 'GET',
         }),
         providesTags: ['GetAdmin'],
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
      makeSuperAdmin: build.query({
         query: (adminId) => ({
            url: `api/v1/admin/make-super-admin/${adminId}`,
            method: 'GET',
         }),
         invalidatesTags: ['GetAdmin'],
      }),

      // -------------------------------- register
      registerAdmin: build.mutation({
         query: (body) => ({
            url: 'api/v1/admin/register',
            method: 'POST',
            body,
         }),
         invalidatesTags: ['Admins'],
      }),
   }),
})

export const {
   useGetAllAdminsQuery,
   useUpdateAdminMutation,
   useGetAdminByIdQuery,
   useLazyMakeSuperAdminQuery,
   useRegisterAdminMutation,
   useLazyGetAdminByIdQuery,
} = adminControlsApi

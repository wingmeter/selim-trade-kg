import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '../../customBaseFetchQuerry'

export const worksApi = createApi({
   reducerPath: 'worksApi',
   baseQuery: baseQueryWithReauth,
   tagTypes: ['Work', 'AllWorks'],
   endpoints: (build) => ({
      // ------------------------------get all
      getAllWorks: build.query({
         query: ({ page, filter }) => ({
            url: 'api/v1/work',
            method: 'GET',
            // filter need to fix
            params: { page, size: 8, filter },
         }),
         providesTags: ['AllWorks'],
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
      createWorks: build.mutation({
         query: (formData) => ({
            url: `api/v1/work`,
            method: 'POST',
            body: formData,
         }),
         invalidatesTags: ['AllWorks'],
      }),

      // ------------------------------delete method
      deleteWorks: build.mutation({
         query: (workId) => ({
            url: `api/v1/work/${workId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['AllWorks'],
      }),
   }),
})

export const {
   useGetAllWorksQuery,
   useGetWorksByIdQuery,
   useCreateWorksMutation,
   useDeleteWorksMutation,

   useLazyGetWorksByIdQuery,
} = worksApi

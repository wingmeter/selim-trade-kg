import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '../../customBaseFetchQuerry'

export const gatesTypeApi = createApi({
   reducerPath: 'gatesTypeApi',
   baseQuery: baseQueryWithReauth,
   endpoints: (build) => ({
      getAllGateTypes: build.query({
         query: ({ page, filter }) => ({
            url: 'api/v1/gate-types',
            method: 'GET',
            // filter need to fix
            params: { page, size: 8, filter },
         }),
      }),
      getGateTypeById: build.query({
         query: (id) => ({
            url: `api/v1/gate-types/${id}`,
            method: 'GET',
         }),
      }),
      // post method
      createGateType: build.mutation({
         query: (body) => ({
            url: `api/v1/gate-types`,
            method: 'POST',
            body,
         }),
      }),
      // put method
      updateGateType: build.mutation({
         query: (id) => ({
            url: `api/v1/gate-types/${id}`,
            method: 'PUT',
         }),
      }),
      // delete method
      deleteGateType: build.mutation({
         query: (id) => ({
            url: `api/v1/gate-types/${id}`,
            method: 'DELETE',
         }),
      }),

      // you can add new method belongs
   }),
})

export const {
   useGetAllGateTypesQuery,
   useGetGateTypeByIdQuery,
   useLazyGetGateTypeByIdQuery,
   useCreateGateTypeMutation,
   useUpdateGateTypeMutation,
   useDeleteGateTypeMutation,
} = gatesTypeApi

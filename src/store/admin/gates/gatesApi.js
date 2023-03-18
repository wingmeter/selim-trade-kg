import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '../../customBaseFetchQuerry'

export const gatesApi = createApi({
   reducerPath: 'gatesApi',
   baseQuery: baseQueryWithReauth,
   endpoints: (build) => ({
      getAllGates: build.query({
         query: ({ page, filter }) => ({
            url: 'api/v1/gate',
            method: 'GET',
            // filter need to fix
            params: { page, size: 8, filter },
         }),
      }),
      getSingleGateById: build.query({
         query: ({ gateId }) => ({
            url: `api/v1/gate/${gateId}`,
            method: 'GET',
         }),
      }),
      // post method
      createGate: build.mutation({
         query: ({ gateTypeId, gateData }) => ({
            url: `api/v1/gate/${gateTypeId}`,
            method: 'POST',
            body: gateData,
         }),
      }),
      // put method
      updateGate: build.mutation({
         query: ({ adminId }) => ({
            url: `api/v1/gate/${adminId}`,
            method: 'PUT',
         }),
      }),
      // delete method
      deleteGate: build.mutation({
         query: ({ adminId }) => ({
            url: `api/v1/gate/${adminId}`,
            method: 'DELETE',
         }),
      }),

      // you can add new method belongs
   }),
})

export const {
   useGetAllGatesQuery,
   useGetSingleGateByIdQuery,
   useCreateGateMutation,
   useDeleteGateMutation,
   useUpdateGateMutation,
} = gatesApi

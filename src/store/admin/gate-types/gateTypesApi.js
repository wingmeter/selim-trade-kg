import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '../../customBaseFetchQuerry'

export const gatesTypeApi = createApi({
   reducerPath: 'gatesTypeApi',
   baseQuery: baseQueryWithReauth,
   tagTypes: ['GateTypes', 'SingleGateType'],
   endpoints: (build) => ({
      getAllGateTypes: build.query({
         query: ({ page, filter }) => ({
            url: 'api/v1/gate-types',
            method: 'GET',
            // filter need to fix
            params: { page, size: 8, filter },
         }),
         providesTags: ['GateTypes'],
      }),
      getGateTypeById: build.query({
         query: (typeId) => ({
            url: `api/v1/gate-types/${typeId}`,
            method: 'GET',
         }),
         providesTags: ['SingleGateType'],
      }),
      // post method
      createGateType: build.mutation({
         query: (body) => ({
            url: `api/v1/gate-types`,
            method: 'POST',
            body,
         }),
         invalidatesTags: ['GateTypes'],
      }),
      // put method
      updateGateType: build.mutation({
         query: ({ formData, typeId }) => ({
            url: `api/v1/gate-types/${typeId}`,
            method: 'PUT',
            body: formData,
         }),
         invalidatesTags: ['GateTypes'],
      }),
      // delete method
      deleteGateType: build.mutation({
         query: (typeId) => ({
            url: `api/v1/gate-types/${typeId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['GateTypes'],
      }),

      // -----gates methods ------------
      getAllGates: build.query({
         query: ({ page, filter }) => ({
            url: 'api/v1/gate',
            method: 'GET',
            // filter need to fix
            params: { page, size: 8, filter },
         }),
      }),
      getSingleGateById: build.query({
         query: (gateId) => ({
            url: `api/v1/gate/${gateId}`,
            method: 'GET',
         }),
      }),
      // post method
      createGate: build.mutation({
         query: ({ gateTypeId, formData }) => ({
            url: `api/v1/gate/${gateTypeId}`,
            method: 'POST',
            credentials: 'include',
            body: formData,
         }),
         invalidatesTags: ['SingleGateType'],
      }),
      // put method
      updateGate: build.mutation({
         query: ({ gateId, formData }) => ({
            url: `api/v1/gate/${gateId}`,
            method: 'PUT',
            body: formData,
         }),
         invalidatesTags: ['SingleGateType'],
      }),
      // delete method
      deleteGate: build.mutation({
         query: (gateId) => ({
            url: `api/v1/gate/${gateId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['SingleGateType'],
      }),
   }),
})

export const {
   useGetAllGateTypesQuery,
   useGetGateTypeByIdQuery,
   useLazyGetGateTypeByIdQuery,
   useCreateGateTypeMutation,
   useUpdateGateTypeMutation,
   useDeleteGateTypeMutation,
   // gates hooks
   useGetAllGatesQuery,
   useGetSingleGateByIdQuery,
   useLazyGetSingleGateByIdQuery,
   useCreateGateMutation,
   useDeleteGateMutation,
   useUpdateGateMutation,
} = gatesTypeApi

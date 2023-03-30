import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '../../customBaseFetchQuerry'

export const orderApi = createApi({
   reducerPath: 'orderApi',
   baseQuery: baseQueryWithReauth,
   tagTypes: ['Orders', 'SingleOrder'],
   endpoints: (build) => ({
      getAllOrder: build.query({
         query: ({ pageNo, filter }) => ({
            url: 'api/v1/new-order',
            method: 'GET',
            // filter need to fix
            params: { pageNo, pageSize: 8, filter },
         }),
         providesTags: ['Orders'],
      }),
      getOrderById: build.query({
         query: (orderId) => ({
            url: `api/v1/new-order/${orderId}`,
            method: 'GET',
         }),
         providesTags: ['SingleOrder'],
      }),
      // post method
      createOrder: build.mutation({
         query: (body) => ({
            url: `api/v1/new-order`,
            method: 'POST',
            body,
         }),
         invalidatesTags: ['Orders'],
      }),
      // delete method
      deleteOrder: build.mutation({
         query: (orderId) => ({
            url: `api/v1/new-order/${orderId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['Orders'],
      }),
      getAllOrderInProgress: build.query({
         query: ({ pageNo, filter }) => ({
            url: 'api/v1/order-in-progress',
            method: 'GET',
            // filter need to fix
            params: { pageNo, pageSize: 8, filter },
         }),
         providesTags: ['Orders'],
      }),
      getOrderInProgressById: build.query({
         query: (orderId) => ({
            url: `api/v1/order-in-progress/${orderId}`,
            method: 'GET',
         }),
         providesTags: ['SingleOrder'],
      }),
      // post method
      createOrderInProgress: build.mutation({
         query: ({ data: body, orderId }) => ({
            url: `api/v1/order-in-progress/${orderId}`,
            method: 'POST',
            body,
         }),
         invalidatesTags: ['Orders'],
      }),
      updateOrderInProgress: build.mutation({
         query: ({ data: body, orderId }) => ({
            url: `api/v1/order-in-progress/${orderId}`,
            method: 'PUT',
            body,
         }),
         invalidatesTags: ['Orders'],
      }),
      // delete method
      deleteOrderInProgress: build.mutation({
         query: (orderId) => ({
            url: `api/v1/order-in-progress/${orderId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['Orders'],
      }),
   }),
})

export const {
   useGetAllOrderQuery,
   useCreateOrderMutation,
   useDeleteOrderMutation,
   useGetOrderByIdQuery,
   useLazyGetAllOrderQuery,
   useLazyGetOrderByIdQuery,
   useGetAllOrderInProgressQuery,
   useGetOrderInProgressByIdQuery,
   useCreateOrderInProgressMutation,
   useDeleteOrderInProgressMutation,
   useUpdateOrderInProgressMutation,
   useLazyGetOrderInProgressByIdQuery,
} = orderApi

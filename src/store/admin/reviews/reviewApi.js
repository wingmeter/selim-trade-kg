import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '../../customBaseFetchQuerry'

export const reviewApi = createApi({
   reducerPath: 'reviewsApi',
   baseQuery: baseQueryWithReauth,
   tagTypes: ['Reviews', 'SingleReview'],
   endpoints: (build) => ({
      getAllReviews: build.query({
         query: ({ pageNo, filter }) => ({
            url: 'api/v1/review',
            method: 'GET',
            // filter need to fix
            params: { pageNo, pageSize: 8, filter },
         }),
         providesTags: ['Reviews'],
      }),
      getAllReviewsShort: build.query({
         query: ({ pageNo, filter }) => ({
            url: 'api/v1/review/short',
            method: 'GET',
            // filter need to fix
            params: { pageNo, pageSize: 16, filter },
         }),
         providesTags: ['Reviews'],
      }),
      getReviewsById: build.query({
         query: (reviewId) => ({
            url: `api/v1/review/${reviewId}`,
            method: 'GET',
         }),
         providesTags: ['SingleReview'],
      }),
      // post method
      createReviews: build.mutation({
         query: (body) => ({
            url: `api/v1/review`,
            method: 'POST',
            body,
         }),
         invalidatesTags: ['Reviews'],
      }),
      // put method
      updateReviews: build.mutation({
         query: ({ formData, reviewId }) => ({
            url: `api/v1/review/${reviewId}`,
            method: 'PUT',
            body: formData,
         }),
         invalidatesTags: ['Reviews'],
      }),
      // delete method
      deleteReviews: build.mutation({
         query: (reviewId) => ({
            url: `api/v1/review/${reviewId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['Reviews'],
      }),
   }),
})

export const {
   useGetAllReviewsQuery,
   useGetAllReviewsShortQuery,
   useCreateReviewsMutation,
   useDeleteReviewsMutation,
   useGetReviewsByIdQuery,
   useUpdateReviewsMutation,
   useLazyGetReviewsByIdQuery,
} = reviewApi

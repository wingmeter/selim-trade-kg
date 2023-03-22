import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '../../customBaseFetchQuerry'

export const newsApi = createApi({
   reducerPath: 'newsApi',
   baseQuery: baseQueryWithReauth,
   tagTypes: ['News', 'SingleNews'],
   endpoints: (build) => ({
      getAllNews: build.query({
         query: ({ page, filter }) => ({
            url: 'api/v1/news',
            method: 'GET',
            // filter need to fix
            params: { page, size: 8, filter },
         }),
         providesTags: ['News'],
      }),
      getNewsById: build.query({
         query: (typeId) => ({
            url: `api/v1/news/${typeId}`,
            method: 'GET',
         }),
         providesTags: ['SingleNews'],
      }),
      // post method
      createNews: build.mutation({
         query: (body) => ({
            url: `api/v1/news`,
            method: 'POST',
            body,
         }),
         invalidatesTags: ['News'],
      }),
      // put method
      updateNews: build.mutation({
         query: ({ formData, newsId }) => ({
            url: `api/v1/news/${newsId}`,
            method: 'PUT',
            body: formData,
         }),
         invalidatesTags: ['News'],
      }),
      // delete method
      deleteNews: build.mutation({
         query: (typeId) => ({
            url: `api/v1/news/${typeId}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['News'],
      }),
   }),
})

export const {
   useGetAllNewsQuery,
   useCreateNewsMutation,
   useDeleteNewsMutation,
   useGetNewsByIdQuery,
   useLazyGetNewsByIdQuery,
   useUpdateNewsMutation,
} = newsApi

import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '../customBaseFetchQuerry'

export const servicesApi = createApi({
   reducerPath: 'servicesApi',
   baseQuery: baseQueryWithReauth,
   refetchOnFocus: true,
   endpoints: (build) => ({
      getAllServices: build.query({
         query: ({ pageNo, filter, pageSize }) => ({
            url: 'api/v1/gate-types/short',
            method: 'GET',
            params: { pageNo, pageSize, filter },
         }),
      }),
      getServiceById: build.query({
         query: (typeId) => ({
            url: `api/v1/gate-types/short/${typeId}`,
            method: 'GET',
         }),
      }),
   }),
})

export const {
   useGetAllServicesQuery,
   useGetServiceByIdQuery,
   useLazyGetAllServicesQuery,
   useLazyGetServiceByIdQuery,
} = servicesApi

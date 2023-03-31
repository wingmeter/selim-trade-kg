/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react'

import { CContainer, CSpinner } from '@coreui/react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'

// routes config
import Page404 from '../../admin/pages/not-found/Page404'

import routes from './routes'

const AdminContent = () => {
   const { role } = useSelector((state) => state.auth)
   return (
      <CContainer lg>
         <Suspense fallback={<CSpinner color="primary" />}>
            <Routes>
               {routes.map((route, idx) => {
                  if (route.element && route.role) {
                     if (route.role === role) {
                        return (
                           <Route
                              key={idx}
                              path={route.path}
                              exact={route.exact}
                              name={route.name}
                              element={<route.element />}
                           />
                        )
                     }
                     return null
                  }
                  return (
                     route.element && (
                        <Route
                           key={idx}
                           path={route.path}
                           exact={route.exact}
                           name={route.name}
                           element={<route.element />}
                        />
                     )
                  )
               })}
               <Route path="/" element={<Navigate to="dashboard" replace />} />
            </Routes>
         </Suspense>
      </CContainer>
   )
}

export default React.memo(AdminContent)

/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react'

import { CContainer, CSpinner } from '@coreui/react'
import { Navigate, Route, Routes } from 'react-router-dom'

// routes config
import routes from './routes'

const AdminContent = () => {
   return (
      <CContainer lg>
         <Suspense fallback={<CSpinner color="primary" />}>
            <Routes>
               {routes.map((route, idx) => {
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

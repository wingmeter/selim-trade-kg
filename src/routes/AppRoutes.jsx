import React from 'react'

import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import AppLayout from '../layout/AppLayout'
import MainPage from '../pages/main-page/MainPage'

const AppRoutes = () => {
   return (
      <AppLayout>
         <Routes>
            <Route path="/" element={<Navigate to="main" />} />
            <Route path="main" element={<MainPage />} />
            <Route path="services/*" element={<Outlet />}>
               <Route index element={<div>services</div>} />
               <Route path=":id" element={<div>servicesInnerPage</div>} />
            </Route>
            <Route path="works" element={<div>Works</div>} />
            <Route path="news/*" element={<Outlet />}>
               <Route index element={<div>News</div>} />
               <Route path=":id" element={<div>Newssdasds</div>} />
            </Route>
         </Routes>
      </AppLayout>
   )
}

export default AppRoutes

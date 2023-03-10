import React from 'react'

import { Routes, Route, Outlet, Navigate } from 'react-router-dom'

import AppLayout from '../../client/layout/AppLayout'
import MainPage from '../../client/pages/main-page/MainPage'
import NewsInnerPage from '../../client/pages/news-page/NewsInnerPage'
import NewsPage from '../../client/pages/news-page/NewsPage'
import ServicesInnerPage from '../../client/pages/our-services/inner-page/ServicesInnerPage'
import OurServices from '../../client/pages/our-services/OurServicesPage'
import OurWorksPage from '../../client/pages/our-works/OurWorksPage'
import AdminRoutes from '../admin-routes/AdminRoutes'

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Navigate to="main" />} />
            <Route path="main" element={<MainPage />} />
            <Route path="services/*" element={<Outlet />}>
               <Route index element={<OurServices />} />
               <Route path=":id" element={<ServicesInnerPage />} />
            </Route>
            <Route path="works" element={<OurWorksPage />} />
            <Route path="news/*" element={<Outlet />}>
               <Route index element={<NewsPage />} />
               <Route path=":id" element={<NewsInnerPage />} />
            </Route>
         </Route>
         <Route path="admin/*" element={<AdminRoutes />} />
      </Routes>
   )
}

export default AppRoutes

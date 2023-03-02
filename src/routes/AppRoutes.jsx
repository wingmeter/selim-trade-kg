import React from 'react'

import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import AppLayout from '../layout/AppLayout'
import MainPage from '../pages/main-page/MainPage'
import NewsInnerPage from '../pages/news-page/NewsInnerPage'
import NewsPage from '../pages/news-page/NewsPage'
import ServicesInnerPage from '../pages/our-services/inner-page/ServicesInnerPage'
import OurServices from '../pages/our-services/OurServicesPage'
import OurWorksPage from '../pages/our-works/OurWorksPage'

const AppRoutes = () => {
   return (
      <AppLayout>
         <Routes>
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
         </Routes>
      </AppLayout>
   )
}

export default AppRoutes

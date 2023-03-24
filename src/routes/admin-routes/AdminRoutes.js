/* eslint-disable prettier/prettier */
import React, { Suspense } from 'react'

import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import '../../admin/scss/style.scss'
import { ROLES } from '../../utils/constants'
import PrivateRoute from '../private-route'

const loading = (
   <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse" />
   </div>
)

// Containers
const DefaultLayout = React.lazy(() =>
   import('../../admin/layout/DefaultLayout')
)

// Pages
const Login = React.lazy(() => import('../../admin/pages/login/Login'))
const Register = React.lazy(() => import('../../admin/pages/register/Register'))
const Page404 = React.lazy(() => import('../../admin/pages/not-found/Page404'))
// const Page500 = React.lazy(() =>
//    import('../../admin/views/pages/page500/Page500')
// )

const AdminRoutes = () => {
   // const { role } = useSelector((state) => state.auth)
   return (
      <Suspense fallback={loading}>
         <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />

            {/* {role === ROLES.SUPER_ADMIN && (
               <Route
                  exact
                  path="/register"
                  name="Register Page"
                  element={<Register />}
               />
            )} */}

            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<div>500</div>} />
            <Route
               path="/*"
               name="Home"
               element={<PrivateRoute Component={<DefaultLayout />} />}
            />
         </Routes>
      </Suspense>
   )
}

export default AdminRoutes

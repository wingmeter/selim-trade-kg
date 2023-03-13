/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

import { cilLockLocked, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
   CButton,
   CCard,
   CCardBody,
   CCardGroup,
   CCol,
   CContainer,
   CForm,
   CFormInput,
   CInputGroup,
   CInputGroupText,
   CRow,
} from '@coreui/react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { useLoginAdminMutation } from '../../../store/admin/auth/authApi'
import { authActions } from '../../../store/admin/auth/authSlice'
import { ROLES } from '../../../utils/constants'
import nasa from '../../assets/images/nasa.jpeg'

const Login = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const [loginAdmin, { data, isLoading, isError, isSuccess, error }] =
      useLoginAdminMutation()

   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm({ mode: 'onChange' })

   const input = {
      username: {
         ...register('username', {
            required: 'Please enter your username',
         }),
      },
      password: {
         ...register('password', {
            required: 'Please enter your password',
         }),
      },
   }

   const submitHandler = async (formData) => {
      try {
         await loginAdmin(formData)
      } catch (error) {
         console.log(error?.message || 'something went wrong')
      }
   }

   const callAfterLogin = (userData) => {
      reset()
      dispatch(authActions.saveData(userData))

      const role = userData.admin.roles.find((role) =>
         Object.values(ROLES).includes(role)
      )

      switch (role) {
         case ROLES.ADMIN:
            navigate('/admin/dashboard', { replace: true })
            break
         case ROLES.SUPER_ADMIN:
            navigate('/admin/dashboard')

            break
         default:
            break
      }
   }

   useEffect(() => {
      if (isSuccess) callAfterLogin(data)
      if (isError) console.log(`something went wrong`)
   }, [isError, isSuccess])

   return (
      <div
         style={{
            background: `url(${nasa})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            objectPosition: 'top center',
            objectFit: 'cover',
         }}
         className="bg-light min-vh-100 d-flex flex-row align-items-center"
      >
         <CContainer>
            <CRow className="justify-content-center">
               <CCol md={8}>
                  <CCardGroup>
                     <CCard className="p-4">
                        <CCardBody>
                           <CForm onSubmit={handleSubmit(submitHandler)}>
                              <h1>Login</h1>
                              <p className="text-medium-emphasis">
                                 Sign In to your account
                              </p>
                              <CInputGroup className="mb-3">
                                 <CInputGroupText>
                                    <CIcon icon={cilUser} />
                                 </CInputGroupText>
                                 <CFormInput
                                    {...input.username}
                                    placeholder="Username"
                                    autoComplete="username"
                                    error={errors?.username}
                                    disabled={isLoading}
                                 />
                              </CInputGroup>
                              <CInputGroup className="mb-4">
                                 <CInputGroupText>
                                    <CIcon icon={cilLockLocked} />
                                 </CInputGroupText>
                                 <CFormInput
                                    {...input.password}
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    error={errors?.password}
                                    disabled={isLoading}
                                 />
                              </CInputGroup>
                              <CRow>
                                 <CCol xs={6}>
                                    <CButton
                                       type="submit"
                                       color="primary"
                                       className="px-4"
                                    >
                                       Login
                                    </CButton>
                                 </CCol>
                                 <CCol xs={6} className="text-right">
                                    <CButton color="link" className="px-0">
                                       Forgot password?
                                    </CButton>
                                 </CCol>
                              </CRow>
                           </CForm>
                        </CCardBody>
                     </CCard>
                     <CCard
                        className="text-white bg-primary py-5"
                        style={{ width: '44%' }}
                     >
                        <CCardBody className="text-center">
                           <div>
                              <h2>Sign up</h2>
                              <p>
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipisicing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna aliqua.
                              </p>
                              <Link to="/admin/register">
                                 <CButton
                                    color="primary"
                                    className="mt-3"
                                    active
                                    tabIndex={-1}
                                 >
                                    Register Now!
                                 </CButton>
                              </Link>
                           </div>
                        </CCardBody>
                     </CCard>
                  </CCardGroup>
               </CCol>
            </CRow>
         </CContainer>
      </div>
   )
}

export default Login

/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import { cilLockLocked, cilTrash, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCol,
   CContainer,
   CForm,
   CFormInput,
   CFormLabel,
   CImage,
   CInputGroup,
   CInputGroupText,
   CRow,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import { useRegisterAdminMutation } from '../../../../store/admin/auth/authApi'
import { useCreateWorksMutation } from '../../../../store/admin/works/worksApi'
import { getImgUrl } from '../../../../utils/helpers/general'

const AdminRegisterForm = () => {
   const navigate = useNavigate()
   const { adminId } = useParams()

   const [registerAdmin, { isLoading }] = useRegisterAdminMutation()

   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm({ mode: 'onChange' })

   const input = {
      username: {
         ...register('username', {
            required: 'Please enter your user name',
         }),
      },
      password: {
         ...register('password', {
            required: 'Please enter your password',
         }),
      },
   }
   const navigateToLogin = () => {
      navigate('/admin/login')
   }

   const submitHandler = async (formData) => {
      try {
         await registerAdmin(formData).unwrap()
         navigateToLogin()
      } catch (e) {
         console.log(e)
      }
   }

   // ------------effects------------------
   useEffect(() => {
      // if (adminId) getWorksById(adminId)
   }, [])

   return (
      <CContainer>
         <CRow style={{ height: '60vh' }}>
            <CCol md={20} lg={9} xl={10}>
               <CCard className="mx-1" style={{ padding: '2rem 2rem 4rem' }}>
                  <CCardBody className="p-4">
                     <CForm onSubmit={handleSubmit(submitHandler)}>
                        <h1>Register</h1>
                        <p className="text-medium-emphasis">
                           {adminId
                              ? 'Update admin account'
                              : 'Create new admin account'}
                        </p>
                        <br />
                        <br />
                        <CInputGroup className="mb-4">
                           <CInputGroupText>
                              <CIcon icon={cilUser} />
                           </CInputGroupText>
                           <CFormInput
                              placeholder="Username"
                              autoComplete="username"
                              disabled={isLoading}
                              error={errors?.username}
                              {...input.username}
                           />
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                           <CInputGroupText>
                              <CIcon icon={cilLockLocked} />
                           </CInputGroupText>
                           <CFormInput
                              type="password"
                              placeholder="Password"
                              autoComplete="new-password"
                              disabled={isLoading}
                              error={errors?.password}
                              {...input.password}
                           />
                        </CInputGroup>
                        <br />
                        <br />
                        <div className="d-grid">
                           <CButton type="submit" color="success">
                              {adminId ? 'Update Admin' : 'Create Admin'}
                           </CButton>
                        </div>
                     </CForm>
                  </CCardBody>
               </CCard>
            </CCol>
         </CRow>
      </CContainer>
   )
}

export default AdminRegisterForm

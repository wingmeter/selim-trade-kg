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
import { useMediaQuery } from 'react-responsive'
import { useNavigate, useParams } from 'react-router'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import {
   useGetAdminByIdQuery,
   useLazyGetAdminByIdQuery,
   useRegisterAdminMutation,
   useUpdateAdminMutation,
} from '../../../../store/admin/admin-controls/adminControlApi'
import { DeviceSize } from '../../../../utils/constants'
import { getImgUrl } from '../../../../utils/helpers/general'

const AdminRegisterForm = () => {
   const navigate = useNavigate()
   const { adminId } = useParams()
   const [data, setData] = useState({})
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   const [getAdminById, { data: admin, isGeting }] = useLazyGetAdminByIdQuery()
   const [registerAdmin, { isLoading }] = useRegisterAdminMutation()
   const [updateAdmin, { isUpdating }] = useUpdateAdminMutation()

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
   const navigateAdminList = () => {
      reset()
      navigate('/admin/controls')
   }

   const submitHandler = async (formData) => {
      if (!adminId) {
         try {
            await registerAdmin(formData).unwrap()
            navigateAdminList()
         } catch (e) {
            console.error(e)
         }
      } else {
         try {
            await updateAdmin({ data, adminId }).unwrap()
            navigateAdminList()
         } catch (e) {
            console.error(e)
         }
      }
   }

   // ------------effects------------------
   useEffect(() => {
      if (adminId) getAdminById(adminId)
   }, [])
   useEffect(() => {
      setData({ username: admin?.username, password: admin?.password })
   }, [adminId])

   return (
      <CContainer>
         <CRow style={{ height: '60vh' }}>
            <CCol md={20} lg={9} xl={10}>
               <CCard className={`${isMobile ? 'mx-1' : 'mx-2'}`}>
                  <CCardHeader>
                     <CButton onClick={navigateAdminList}>Go Back</CButton>
                  </CCardHeader>
                  <CCardBody className={isMobile ? 'p-2' : 'p-4'}>
                     <CForm onSubmit={handleSubmit(submitHandler)}>
                        <h1>{adminId ? 'Update' : 'Register'}</h1>
                        <p className="text-medium-emphasis">
                           {adminId
                              ? 'Update admin account'
                              : 'Create new admin account'}
                        </p>
                        <br />
                        <CInputGroup className="mb-4">
                           <CInputGroupText>
                              <CIcon icon={cilUser} />
                           </CInputGroupText>
                           <CFormInput
                              defaultValue={data?.username || ''}
                              placeholder="Username"
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
                              defaultValue={data?.password || ''}
                              type="password"
                              placeholder="Password"
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
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
               </CCard>
            </CCol>
         </CRow>
      </CContainer>
   )
}

export default AdminRegisterForm

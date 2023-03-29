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
   CInputGroup,
   CInputGroupText,
   CRow,
} from '@coreui/react'
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
import { getErrorMessage, getImgUrl } from '../../../../utils/helpers/general'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../../components/UI/notification/Notification'

const AdminRegisterForm = () => {
   const navigate = useNavigate()
   const { adminId } = useParams()
   const [data, setData] = useState({})
   const [showPassField, SetPassField] = useState(false)
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   const [getAdminById, { data: admin, isGeting }] = useLazyGetAdminByIdQuery()
   const [registerAdmin, { isLoading: isRegistering }] =
      useRegisterAdminMutation()
   const [updateAdmin, { isLoading: isUpdating }] = useUpdateAdminMutation()

   const {
      register,
      formState: { errors },
      handleSubmit,
      watch,
      reset,
   } = useForm({ mode: 'onChange' })

   const isRegistration = !adminId

   const input = {
      username: {
         ...register('username', {
            required: 'Please enter your user name',
         }),
      },
      password: {
         ...register('password', {
            required: 'Please enter your password',
            pattern: {
               value: /^(?=.*\d)(?=.*[a-z]).{6,32}$/,
               message:
                  'Password should be between 6 and 32 characters, and contain at least one lowercase letter and one digit.',
            },
         }),
      },
   }
   const navigateAdminList = () => {
      reset()
      navigate('/admin/controls')
   }

   const submitHandler = async (formData) => {
      if (isRegistration) {
         try {
            await registerAdmin(formData).unwrap()
            showSuccessMessage({ message: 'Successfully created new admin!' })
            navigateAdminList()
         } catch (e) {
            showErrorMessage({ message: getErrorMessage(e) })
         }
      } else {
         try {
            await updateAdmin({ data, adminId }).unwrap()
            showSuccessMessage({ message: 'Successfully updated admin!' })
            navigateAdminList()
         } catch (e) {
            showErrorMessage({ message: getErrorMessage(e) })
         }
      }
   }

   // ------------effects------------------
   useEffect(() => {
      if (adminId) getAdminById(adminId)
   }, [])

   useEffect(() => {
      setData({ username: admin?.username })
   }, [admin])

   return (
      <CContainer>
         <CRow style={{ height: '60vh' }}>
            <CCol md={20} lg={9} xl={10}>
               <CCard className={`${isMobile ? 'mx-1' : 'mx-2'}`}>
                  <CCardHeader>
                     <CButton onClick={navigateAdminList}>Go Back</CButton>
                  </CCardHeader>
                  <CCardBody className={isMobile ? 'p-2' : 'p-4'}>
                     <CForm validated onSubmit={handleSubmit(submitHandler)}>
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
                              disabled={isRegistering}
                              error={errors?.username}
                              feedback={errors?.username}
                              {...input.username}
                           />
                        </CInputGroup>
                        {showPassField && adminId ? (
                           <CInputGroup className="mb-3">
                              <CInputGroupText>
                                 <CIcon icon={cilLockLocked} />
                              </CInputGroupText>
                              <CFormInput
                                 defaultValue={data?.password || ''}
                                 type="password"
                                 placeholder="Password"
                                 disabled={isRegistering}
                                 error={errors?.password}
                                 {...input.password}
                              />
                           </CInputGroup>
                        ) : (
                           <CButton onClick={() => SetPassField(true)}>
                              set new password
                           </CButton>
                        )}

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

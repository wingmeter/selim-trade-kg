/* eslint-disable no-unused-vars */
import { cilLockLocked, cilUser } from '@coreui/icons'
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
   CFormText,
   CInputGroup,
   CInputGroupText,
   CRow,
} from '@coreui/react'
import { useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router'

import { useRegisterAdminMutation } from '../../../../store/admin/admin-controls/adminControlApi'
import { DeviceSize } from '../../../../utils/constants'
import { getErrorMessage } from '../../../../utils/helpers/general'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../../components/UI/notification/Notification'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,43}$/

const AdminRegisterForm = () => {
   const navigate = useNavigate()
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   const [registerAdmin, { isLoading: isRegistering }] =
      useRegisterAdminMutation()

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
            pattern: {
               value: passwordRegex,
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
      if (formData) {
         try {
            await registerAdmin(formData).unwrap()
            showSuccessMessage({ message: 'Successfully created new admin!' })
            navigateAdminList()
         } catch (e) {
            showErrorMessage({ message: getErrorMessage(e) })
         }
      }
   }

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
                        <h1>Register</h1>
                        <p className="text-medium-emphasis">
                           Create new admin account
                        </p>
                        <br />
                        <CInputGroup className="mb-4">
                           <CInputGroupText>
                              <CIcon icon={cilUser} />
                           </CInputGroupText>
                           <CFormInput
                              placeholder="Username"
                              id="validationServer03"
                              required
                              disabled={isRegistering}
                              error={errors?.username}
                              feedback={errors?.username}
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
                              id="validationServer02"
                              required
                              disabled={isRegistering}
                              invalid={errors?.password}
                              {...input.password}
                           />
                           <br />
                        </CInputGroup>
                        <CFormText style={{ color: 'tomato' }}>
                           {errors?.password?.message || ''}
                        </CFormText>
                        <br />
                        <div className="d-grid">
                           <CButton type="submit" color="success">
                              Create Admin
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

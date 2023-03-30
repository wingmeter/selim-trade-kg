/* eslint-disable no-unused-vars */
import { useEffect, useInsertionEffect, useState } from 'react'

import { cil3d, cilLockLocked, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCol,
   CContainer,
   CForm,
   CFormCheck,
   CFormInput,
   CFormSwitch,
   CFormText,
   CInputGroup,
   CInputGroupText,
   CRow,
   CSpinner,
} from '@coreui/react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate, useParams } from 'react-router'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import useForm from '../../../../hooks/useForm'
import {
   useGetAdminByIdQuery,
   useUpdateAdminMutation,
} from '../../../../store/admin/admin-controls/adminControlApi'
import { DeviceSize } from '../../../../utils/constants'
import { getErrorMessage } from '../../../../utils/helpers/general'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../../components/UI/notification/Notification'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,43}$/

const AdminEditForm = () => {
   const navigate = useNavigate()
   const { adminId } = useParams()
   const [showPassField, setPassField] = useState(false)
   const [validated, setValidated] = useState(false)
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   const { data: admin, isGeting } = useGetAdminByIdQuery(adminId)
   const [updateAdmin, { isLoading: isUpdating }] = useUpdateAdminMutation()
   const { values, errors, handleInputChange, setErrors, setValues } = useForm({
      username: admin?.username,
      active: admin?.active,
      password: null,
   })
   const navigateAdminList = () => {
      navigate('/admin/controls')
   }

   const submitHandler = async (e) => {
      e.preventDefault()
      if (showPassField) {
         setValidated(true)
         if (showPassField && !passwordRegex.test(values.password)) {
            setErrors({
               password:
                  'Password must contain at least one lowercase letter, one uppercase letter, and one number, and must be between 6 and 43 characters long.',
            })
         } else {
            setErrors(null)
         }
         return
      }

      if (!showPassField) {
         values.password = null
      }

      if (adminId) {
         try {
            await updateAdmin({
               data: values,
               adminId,
            }).unwrap()
            showSuccessMessage({ message: 'Successfully updated admin!' })
            navigateAdminList()
         } catch (e) {
            showErrorMessage({ message: getErrorMessage(e) })
         }
      }
   }
   const togglePassFieldHandler = () => {
      setPassField((prev) => !prev)
   }
   useEffect(() => {
      setValues({
         username: admin?.username,
         active: admin?.active,
         password: null,
      })
   }, [admin])

   return isGeting ? (
      <CSpinner color="primary" />
   ) : (
      <CContainer>
         <CRow style={{ height: '60vh' }}>
            <CCol md={20} lg={9} xl={10}>
               <CCard className={`${isMobile ? 'mx-1' : 'mx-2'}`}>
                  <CCardHeader>
                     <CButton onClick={navigateAdminList}>Go Back</CButton>
                  </CCardHeader>
                  <CCardBody className={isMobile ? 'p-2' : 'p-4'}>
                     <CForm validated={validated} onSubmit={submitHandler}>
                        <h1>Update</h1>
                        <p className="text-medium-emphasis">
                           Update admin account
                        </p>
                        <br />
                        <CInputGroup className="mb-4">
                           <CInputGroupText>
                              <CIcon icon={cilUser} />
                           </CInputGroupText>
                           <CFormInput
                              value={values?.username || admin?.username}
                              placeholder="Username"
                              name="username"
                              disabled={isUpdating}
                              feedback={errors?.username}
                              onChange={handleInputChange}
                              id="validationCustom02"
                           />
                        </CInputGroup>
                        <CFormCheck
                           size="lg"
                           isChecked={showPassField}
                           onChange={togglePassFieldHandler}
                           label={
                              showPassField
                                 ? 'Hide password field'
                                 : 'Set new password'
                           }
                        />
                        {showPassField && (
                           <CInputGroup className="mb-3">
                              <CInputGroupText>
                                 <CIcon icon={cilLockLocked} />
                              </CInputGroupText>
                              <CFormInput
                                 value={values?.password || admin?.password}
                                 id="validationCustom02"
                                 type="password"
                                 name="password"
                                 placeholder="Password"
                                 disabled={isUpdating}
                                 onChange={handleInputChange}
                                 feedback={!errors?.password}
                                 invalid={!errors?.password}
                                 required
                              />
                              <br />
                              <CFormText>{errors?.password}</CFormText>
                           </CInputGroup>
                        )}
                        <br />
                        <br />
                        <Flex direction="column" gap="10px" width="100%">
                           <CFormText color="primary">
                              <CIcon icon={cil3d} /> Activate the administrator
                              profile and the inactive user profile
                           </CFormText>
                           <CFormSwitch
                              name="active"
                              color="success"
                              size="lg"
                              isChecked={admin?.active || values?.active}
                              onChange={handleInputChange}
                              label={values?.active ? 'Active' : 'Inactive'}
                           />
                        </Flex>

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

export default AdminEditForm

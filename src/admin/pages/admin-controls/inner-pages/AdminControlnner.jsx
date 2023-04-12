import { cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
   CAvatar,
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardSubtitle,
   CCardTitle,
   CContainer,
   CSpinner,
} from '@coreui/react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import {
   useGetAdminByIdQuery,
   useLazyMakeSuperAdminQuery,
} from '../../../../store/admin/admin-controls/adminControlApi'
import { ROLES } from '../../../../utils/constants'
import { getErrorMessage } from '../../../../utils/helpers/general'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../../components/UI/notification/Notification'

const AdminInnerPage = () => {
   const navigate = useNavigate()
   const { adminId } = useParams()
   const { adminData } = useSelector((state) => state.auth)

   const { data: singleAdminData, isFetching } = useGetAdminByIdQuery(adminId)
   const [makeSuperAdmin, { data: superAdminData, isMakingSuperAdmin }] =
      useLazyMakeSuperAdminQuery()

   const makeSuperAdminHandler = async (adminsId) => {
      try {
         await makeSuperAdmin(adminsId).unwrap()
         showSuccessMessage(
            `${superAdminData?.username} successfully became a super-admin!`
         )
         navigate(-1)
      } catch (error) {
         showErrorMessage(getErrorMessage(error))
      }
   }

   return (
      <CContainer>
         <CCard textColor="dark" className="mb-3 border-top-dark border-top-3">
            <CCardHeader className="d-flex align-items-center justify-content-between">
               <Flex align="center" gap="10px">
                  <CIcon icon={cilUser} />
                  <CCardTitle>{singleAdminData?.username}</CCardTitle>
               </Flex>
               <CButton onClick={() => navigate(-1)}>Назад</CButton>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <CSpinner color="primary" />
               ) : (
                  <div className="d-flex align-items-center gap-4 p-3">
                     <CAvatar
                        size="xl"
                        color="secondary"
                        className="me-3"
                        status={singleAdminData?.active ? 'success' : 'danger'}
                     >
                        {'admin'.split('')[0]?.toUpperCase()}
                     </CAvatar>
                     <div
                        style={{
                           display: 'flex',
                           flexDirection: 'column',
                           gap: 10,
                        }}
                     >
                        <CCardSubtitle className="mb-2 ">
                           ID: {singleAdminData?.id || 'no-id'}
                        </CCardSubtitle>
                        <CCardSubtitle className="mb-2 ">
                           Username: {singleAdminData?.username || 'Admin'}
                        </CCardSubtitle>
                        <CCardSubtitle className="mb-2 ">
                           Роль: {singleAdminData?.roles || 'admin'}
                        </CCardSubtitle>
                        <CCardSubtitle className="mb-2 ">
                           Статус:{' '}
                           {singleAdminData?.active ? 'Active' : 'InActive'}
                        </CCardSubtitle>
                     </div>
                  </div>
               )}
               {singleAdminData?.roles.join('') !== ROLES.SUPER_ADMIN &&
                  adminData?.roles.join('') === ROLES.SUPER_ADMIN && (
                     <Flex direction="column" margin="40px 0px 0px">
                        <CCardSubtitle>
                           Give the role of super administrator to other
                           administrators
                        </CCardSubtitle>
                        <br />
                        <CButton
                           disabled={isMakingSuperAdmin}
                           variant="outline"
                           onClick={() => makeSuperAdminHandler(adminId)}
                        >
                           Make a Super Admin
                        </CButton>
                     </Flex>
                  )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default AdminInnerPage

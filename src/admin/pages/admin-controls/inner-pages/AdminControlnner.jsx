import { useState } from 'react'

import {
   CAvatar,
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardSubtitle,
   CCardText,
   CCardTitle,
   CContainer,
   CSpinner,
} from '@coreui/react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import { useLazyMakeSuperAdminQuery } from '../../../../store/admin/admin-controls/adminControlApi'
import { useGetWorksByIdQuery } from '../../../../store/admin/works/worksApi'
import { ROLES } from '../../../../utils/constants'

const WorksInner = () => {
   const navigate = useNavigate()
   const { adminId } = useParams()
   const { adminData } = useSelector((state) => state.auth)
   const { data, setData } = useState({})

   const { data: dataAdmin, isFetching } = useGetWorksByIdQuery(adminId)
   const [makeSuperAdmin, { data: adminResponse, isMakingSuperAdmin }] =
      useLazyMakeSuperAdminQuery()

   const makeSuperAdminHandler = async (adminsId) => {
      try {
         const result = await makeSuperAdmin(adminsId).unwrap()
         setData(result.data)
      } catch (error) {
         console.error(error)
      }
   }

   return (
      <CContainer>
         <CCard>
            <CCardHeader className="d-flex align-items-center justify-content-between">
               <CButton onClick={() => navigate(-1)}>Go Back</CButton>
               <CCardTitle>dynamic-admin name</CCardTitle>
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
                        // status={item?.active ? 'success' : 'danger'}
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
                        <CCardSubtitle>
                           Name: {dataAdmin?.title || 'Admin'}
                        </CCardSubtitle>
                        <CCardSubtitle>
                           Role: {dataAdmin?.created_date || 'Super_admin'}
                        </CCardSubtitle>
                        <CCardSubtitle>
                           Updated Date:
                           {dataAdmin?.createdBy?.username || '11.03.23'}
                        </CCardSubtitle>
                        <CCardText>
                           Status:
                           {dataAdmin?.createdBy?.active
                              ? 'Active'
                              : 'Inactive' || 'Active'}
                        </CCardText>
                     </div>
                  </div>
               )}
               {adminData?.role !== ROLES.SUPER_ADMIN &&
                  dataAdmin?.role === ROLES.SUPER_ADMIN && (
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

export default WorksInner

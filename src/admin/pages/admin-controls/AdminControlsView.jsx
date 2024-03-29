/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react'

import {
   CAvatar,
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardTitle,
   CCol,
   CContainer,
   CFormSwitch,
   CRow,
   CSpinner,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import { Flex } from '../../../client/styles/style-for-positions/style'
import {
   useGetAllAdminsQuery,
   useUpdateAdminMutation,
} from '../../../store/admin/admin-controls/adminControlApi'
import { getErrorMessage } from '../../../utils/helpers/general'
import { ReactComponent as UpdateIcon } from '../../assets/icons/updateIcon.svg'
import TableList from '../../components/table/TableList'
import AppPagination from '../../components/UI/AppPagination'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../components/UI/notification/Notification'

const AdminControlsView = () => {
   const navigate = useNavigate()
   const [queryParams, setQueryParams] = useState({
      page: 1,
   })
   const [visible, setVisible] = useState(false)

   const [updateAdmin, { isLoading: isUpdateing }] = useUpdateAdminMutation()
   const { data: admins, isFetching } = useGetAllAdminsQuery({
      pageNo: queryParams.page - 1,
      pageSize: 4,
   })

   const handleChangePage = (newPage) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            page: newPage,
         }
      })
      window.scroll(0, 0)
   }

   const changeStatusHandler = async (e, admin) => {
      e.stopPropagation()
      try {
         await updateAdmin({
            data: { username: admin.username, active: !admin.active },
            adminId: admin.id,
         }).unwrap()
         showSuccessMessage({
            message: 'Successfully changed status of admin!',
         })
      } catch (error) {
         showErrorMessage({ message: getErrorMessage(error) })
      }
   }

   const columnsConfig = [
      {
         key: 'id',
         header: 'ID',
         width: 30,
      },
      {
         key: 'username',
         header: 'profile',
         width: 70,
         cell: (item) => (
            <CAvatar
               color="secondary"
               status={item?.active ? 'success' : 'danger'}
               size="md"
            >
               {item?.username?.split('')[0]?.toUpperCase()}
            </CAvatar>
         ),
      },
      {
         key: 'username',
         header: 'User Name',
         width: 100,
      },
      {
         key: 'roles',
         header: 'Role',
         width: 100,
      },
      {
         key: 'active',
         header: 'Status',
         width: 100,
         cell: (item) => (
            <ActionContainer>
               <CFormSwitch
                  size="md"
                  label={item.active ? 'Enable' : 'Disable'}
                  checked={item.active}
                  onChange={(event) => {
                     event.stopPropagation()
                     changeStatusHandler(event, item)
                  }}
                  disabled={isUpdateing}
               />
            </ActionContainer>
         ),
      },
      {
         key: 'actions',
         header: 'Действия',
         width: 100,

         cell: (item) => {
            return (
               <ActionContainer>
                  <IconButton
                     onClick={(e) => {
                        e.stopPropagation()
                        navigate(`${item.id}/edit`)
                     }}
                  >
                     <UpdateIcon />
                  </IconButton>
               </ActionContainer>
            )
         },
      },
   ]

   const onNavigetToInnerPage = (e, id) => {
      if (e.target.tagName.toLowerCase() !== 'input') {
         navigate(`${id}`)
      }
   }

   const data = admins?.content

   return (
      <CContainer className="mb-5">
         <CCard className="pb-5">
            <CCardHeader>
               <CRow>
                  <CCol>
                     <CCardTitle>Admins</CCardTitle>
                  </CCol>
                  <CCol sm="3" className="d-flex flex-row-reverse">
                     <CRow>
                        <CButton
                           className="Loat-right"
                           color="success"
                           onClick={() => navigate('/admin/controls/register')}
                        >
                           Создать
                        </CButton>
                     </CRow>
                     <CRow />
                  </CCol>
               </CRow>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <Flex width="100%" justify="center" p="20px">
                     <CSpinner color="primary" />
                  </Flex>
               ) : (
                  <TableListContainer>
                     <TableList
                        data={data}
                        columns={columnsConfig}
                        onNavigetToInnerPage={onNavigetToInnerPage}
                        setVisible={setVisible}
                        visible={visible}
                     />
                     <AppPagination
                        totalPage={admins?.totalPages}
                        page={queryParams?.page}
                        onChange={handleChangePage}
                     />
                  </TableListContainer>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default AdminControlsView

const TableListContainer = styled.div`
   max-width: 1000px;
   margin: 0 auto;
`
const ActionContainer = styled.div`
   display: flex;
   gap: 12px;
   svg {
      cursor: pointer;
   }
   input {
      cursor: pointer;
   }
`

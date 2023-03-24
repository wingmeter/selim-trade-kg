/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react'

import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardTitle,
   CCol,
   CContainer,
   CRow,
   CSpinner,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import { useGetAllAdminsQuery } from '../../../store/admin/admin-controls/adminControlApi'
import { useDeleteWorksMutation } from '../../../store/admin/works/worksApi'
import { getImgUrl } from '../../../utils/helpers/general'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg'
import { ReactComponent as UpdateIcon } from '../../assets/icons/updateIcon.svg'
import Checkbox from '../../components/checkbox/Checkbox'
import TableList from '../../components/table/TableList'
import AppPagination from '../../components/UI/AppPagination'

const AdminControlsView = () => {
   const navigate = useNavigate()
   const [deleteWorks, { isLoading: isDeleting }] = useDeleteWorksMutation()
   const [visible, setVisible] = useState(false)
   const [queryParams, setQueryParams] = useState({
      page: 1,
   })

   const { data: admins, isFetching } = useGetAllAdminsQuery({
      pageNo: queryParams.page - 1,
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

   const deleteGateTypeHandler = async (workId) => {
      try {
         await deleteWorks(workId).unwrap()
         setVisible(false)
      } catch (error) {
         console.error(error || 'something went wrong')
      }
   }

   const columnsConfig = [
      {
         key: 'id',
         header: 'ID',
         width: 40,
      },
      {
         key: 'username',
         header: 'User Name',
         width: 120,
      },
      {
         key: 'roles',
         header: 'Roles',
         width: 100,
      },
      // {
      //    key: 'photoUrl',
      //    header: 'Фото',
      //    width: 125,
      //    cell: (item) => (
      //       <TableImage src={getImgUrl(item.photoUrl)} alt={item.photoUrl} />
      //    ),
      // },
      {
         key: 'active',
         header: 'Status',
         width: 80,
         cell: (item) => (
            <Checkbox checked={item.active} onChange={(e) => null} />
         ),
      },
      // {
      //    key: 'created_date',
      //    header: 'Дата создания',
      //    width: 120,
      // },

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
                  <IconButton
                     onClick={(e) => {
                        e.stopPropagation()
                        setVisible(item.id)
                     }}
                  >
                     <DeleteIcon />
                  </IconButton>
               </ActionContainer>
            )
         },
      },
   ]

   const onNavigetToInnerPage = (id) => {
      navigate(`${id}`)
   }

   const data = admins?.content

   return (
      <CContainer className="mb-5">
         <CCard className="pb-5">
            <CCardHeader>
               <CRow>
                  <CCol>
                     <CCardTitle>Published Our Works</CCardTitle>
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
                  <CSpinner />
               ) : (
                  <TableListContainer>
                     <TableList
                        data={data}
                        columns={columnsConfig}
                        onNavigetToInnerPage={onNavigetToInnerPage}
                        deleteById={deleteGateTypeHandler}
                        setVisible={setVisible}
                        visible={visible}
                        isFetching={isDeleting}
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

const TableImage = styled.img`
   width: 100px;
   height: 100px;
   object-fit: contain;
`
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
`

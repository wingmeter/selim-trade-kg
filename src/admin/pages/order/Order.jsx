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
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import {
   useGetAllOrderQuery,
   useDeleteOrderMutation,
} from '../../../store/admin/order/orderApi'
import { getImgUrl } from '../../../utils/helpers/general'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg'
import TableList from '../../components/table/TableList'
import AppPagination from '../../components/UI/AppPagination'

const OrderView = () => {
   const navigate = useNavigate()
   const [deleteOrder, { isLoading: isDeleting }] = useDeleteOrderMutation()
   const [visible, setVisible] = useState(false)
   const [queryParams, setQueryParams] = useState({
      page: 1,
   })

   const { data: orders, isFetching } = useGetAllOrderQuery({
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

   const deleteOrderHandler = async (workId) => {
      try {
         await deleteOrder(workId).unwrap()
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
         key: 'name',
         header: 'Имя Фамилия',
         width: 80,
      },
      {
         key: 'message',
         header: 'Сообщение',
         width: 120,
      },
      {
         key: 'phoneNumber',
         header: 'Номер телефона',
         width: 120,
      },
      {
         header: 'Действия',
         width: 100,

         cell: (item) => {
            return (
               <ActionContainer>
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

   const onNavigetToInnerPage = (e, id) => {
      navigate(`${id}`)
   }

   const data = orders?.content

   return (
      <CContainer className="mb-5">
         <CCard className="pb-5">
            <CCardHeader>
               <CRow>
                  <CCol>
                     <CCardTitle>Orders</CCardTitle>
                  </CCol>
               </CRow>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <span>Loading...</span>
               ) : (
                  <TableListContainer>
                     <TableList
                        data={data}
                        columns={columnsConfig}
                        onNavigetToInnerPage={onNavigetToInnerPage}
                        deleteById={deleteOrderHandler}
                        setVisible={setVisible}
                        visible={visible}
                        isFetching={isDeleting}
                     />
                     <AppPagination
                        totalPage={orders.totalPages}
                        page={queryParams.page}
                        onChange={handleChangePage}
                     />
                  </TableListContainer>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default OrderView

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

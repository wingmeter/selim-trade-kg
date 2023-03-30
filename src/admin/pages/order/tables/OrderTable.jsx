/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react'

import { CCardBody } from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import {
   useDeleteOrderMutation,
   useGetAllOrderQuery,
} from '../../../../store/admin/order/orderApi'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteIcon.svg'
import PlusIcon from '../../../assets/images/plusIcon.png'
import TableList from '../../../components/table/TableList'
import AppPagination from '../../../components/UI/AppPagination'

const OrderTable = () => {
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
                        navigate(`${item.id}/create`)
                     }}
                  >
                     <TableIcon src={PlusIcon} alt="plus" />
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

   const onNavigetToInnerPage = (e, id) => {
      navigate(`${id}`)
   }

   const data = orders?.content
   return (
      <CCardBody>
         {isFetching ? (
            <span>Loading...</span>
         ) : (
            <TableListContainer>
               {!data.length ? (
                  <Message>Пока заявок нет</Message>
               ) : (
                  <>
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
                  </>
               )}
            </TableListContainer>
         )}
      </CCardBody>
   )
}

export default OrderTable

const TableIcon = styled.img`
   width: 20px;
   height: 20px;
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
const Message = styled.p`
   text-align: center;
   margin-top: 30px;
   font-size: 16px;
`

/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react'

import { CCardBody } from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import {
   useGetAllOrderInProgressQuery,
   useDeleteOrderInProgressMutation,
} from '../../../../store/admin/order/orderApi'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteIcon.svg'
import { ReactComponent as UpdateIcon } from '../../../assets/icons/updateIcon.svg'
import TableList from '../../../components/table/TableList'
import AppPagination from '../../../components/UI/AppPagination'

const OrderInProgressTable = () => {
   const navigate = useNavigate()
   const [deleteOrderInProgress, { isLoading: isOrderDeleting }] =
      useDeleteOrderInProgressMutation()
   const [visible, setVisible] = useState(false)
   const [queryOrderParams, setQueryOrderParams] = useState({
      page: 1,
   })

   const { data: orderInProgress, isOrderFetching } =
      useGetAllOrderInProgressQuery({
         pageNo: queryOrderParams.page - 1,
      })

   const handleOrderChangePage = (newPage) => {
      setQueryOrderParams((prev) => {
         return {
            ...prev,
            page: newPage,
         }
      })
      window.scroll(0, 0)
   }

   const deleteOrderInProgressHandler = async (workId) => {
      console.log(workId)
      try {
         await deleteOrderInProgress(workId).unwrap()
         setVisible(false)
      } catch (error) {
         console.error(error || 'something went wrong')
      }
   }

   const columnsOrderConfig = [
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
         key: 'gate',
         header: 'Ворота',
         cell: (item) => {
            return <span>{item?.gate?.name}</span>
         },
         width: 120,
      },
      {
         key: 'gateType',
         header: 'Тип ворот',
         cell: (item) => {
            return <span>{item?.gateType?.name}</span>
         },
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
                        navigate(`${item.id}/edit`)
                     }}
                  >
                     <UpdateIcon />
                  </IconButton>
                  <IconButton
                     onClick={(e) => {
                        e.stopPropagation()
                        console.log(item.id)
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

   const dataOrderInProgress = orderInProgress?.content

   return (
      <CCardBody>
         {isOrderFetching ? (
            <span>Loading...</span>
         ) : (
            <TableListContainer>
               {!dataOrderInProgress ? (
                  <Message>Пока заявок нет</Message>
               ) : (
                  <>
                     <TableList
                        data={dataOrderInProgress}
                        columns={columnsOrderConfig}
                        onNavigetToInnerPage={onNavigetToInnerPage}
                        deleteById={deleteOrderInProgressHandler}
                        setVisible={setVisible}
                        visible={visible}
                        isFetching={isOrderDeleting}
                     />
                     <AppPagination
                        totalPage={orderInProgress?.totalPages}
                        page={queryOrderParams.page}
                        onChange={handleOrderChangePage}
                     />
                  </>
               )}
            </TableListContainer>
         )}
      </CCardBody>
   )
}

export default OrderInProgressTable

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

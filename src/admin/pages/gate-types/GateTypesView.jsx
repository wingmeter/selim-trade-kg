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

import { Flex } from '../../../client/styles/style-for-positions/style'
import {
   useDeleteGateTypeMutation,
   useGetAllGateTypesQuery,
} from '../../../store/admin/gate-types/gateTypesApi'
import { getErrorMessage, getImgUrl } from '../../../utils/helpers/general'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg'
import { ReactComponent as UpdateIcon } from '../../assets/icons/updateIcon.svg'
import { getLastValue } from '../../components/last-update/LastUpdateList'
import TableList from '../../components/table/TableList'
import AppPagination from '../../components/UI/AppPagination'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../components/UI/notification/Notification'

const GateTypesView = () => {
   const navigate = useNavigate()
   const [visible, setVisible] = useState(false)
   const [queryParams, setQueryParams] = useState({
      page: 1,
   })

   const { data: gateTypes, isFetching } = useGetAllGateTypesQuery({
      pageNo: queryParams.page - 1,
      pageSize: 6,
   })
   const [deleteGateType, { isLoading: isDeleting }] =
      useDeleteGateTypeMutation()

   const handleChangePage = (newPage) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            page: newPage,
         }
      })
      window.scroll(0, 0)
   }

   const deleteGateTypeHandler = async (gateTypeId) => {
      try {
         await deleteGateType(gateTypeId).unwrap()
         setVisible(false)
         showSuccessMessage({ message: 'Successfully deleted gate type' })
      } catch (error) {
         showErrorMessage(getErrorMessage(error))
      }
   }

   // config table col
   const columnsConfig = [
      {
         key: 'id',
         header: 'ID',
         width: 40,
      },
      {
         key: 'backgroundUrl',
         header: 'Фото',
         width: 80,

         cell: (item) => (
            <TableImage
               src={getImgUrl(item.backgroundUrl)}
               alt={item.backgroundUrl}
            />
         ),
      },
      { key: 'name', header: 'Title', width: 150 },
      {
         key: 'created_date',
         header: 'Дата создания',
         width: 120,
      },
      {
         key: 'createdBy',
         header: 'Created By',
         width: 100,
         cell: (item) => <span>{item.createdBy.username}</span>,
      },
      {
         key: 'active',
         header: 'Last Update',
         width: 120,
         cell: (item) => (
            <span>
               {item?.updatedByList?.length !== 0
                  ? getLastValue(item?.updatedByList)
                  : 'No updates'}
            </span>
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
      if (e.target.tagName.toLowerCase() !== 'input') {
         navigate(`${id}`)
      }
   }

   const data = gateTypes?.content
   return (
      <CContainer>
         <CCard>
            <CCardHeader>
               <CRow>
                  <CCol>
                     <CCardTitle>Created Gates</CCardTitle>
                  </CCol>
                  <CCol sm="3" className="d-flex flex-row-reverse">
                     <CRow>
                        <CButton
                           className="Loat-right"
                           color="success"
                           onClick={() => navigate('create')}
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
                  <Flex width="100%" justify="center" p="50px">
                     <CSpinner color="primary" />
                  </Flex>
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
                        totalPage={gateTypes.totalPages}
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

export default GateTypesView

const TableImage = styled.img`
   width: 70px;
   height: 70px;
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

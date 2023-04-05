/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react'

import {
   CContainer,
   CButton,
   CCol,
   CRow,
   CCard,
   CCardTitle,
   CCardHeader,
   CCardBody,
   CSpinner,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate, useParams } from 'react-router'
import styled from 'styled-components'

import {
   useDeleteAdvantageMutation,
   useLazyGetGateTypeByIdQuery,
} from '../../../../store/admin/gate-types/gateTypesApi'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteIcon.svg'
import { ReactComponent as UpdateIcon } from '../../../assets/icons/updateIcon.svg'
import { getLastValue } from '../../../components/last-update/LastUpdateList'
import TableList from '../../../components/table/TableList'
import AppPagination from '../../../components/UI/AppPagination'

const AdvantageView = ({ advantage, isFetching }) => {
   const navigate = useNavigate()
   const [visible, setVisible] = useState(false)
   const { gateTypeId } = useParams()
   const [queryParams, setQueryParams] = useState({
      page: 1,
   })
   const [deleteAdvantage, { isLoading: isDeleting }] =
      useDeleteAdvantageMutation()
   const { getGateTypeById } = useLazyGetGateTypeByIdQuery()
   const handleChangePage = (newPage) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            page: newPage,
         }
      })
   }

   const deleteGateHandler = async (advantageId) => {
      try {
         await deleteAdvantage(advantageId).unwrap()
         setVisible(false)
         getGateTypeById(gateTypeId)
      } catch (error) {
         console.error(error || 'something went wrong')
      }
   }
   // config table col
   const columnsConfig = [
      {
         key: 'id',
         header: 'ID',
         width: 30,
      },
      { key: 'title', header: 'Title', width: 150 },
      { key: 'description', header: 'Description', width: 150 },
      {
         key: 'created_date',
         header: 'Дата создания',
         width: 120,
      },
      {
         key: 'createdBy',
         header: 'Created By',
         width: 120,

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
                  : 'No last updates'}
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
                        navigate(`advantage/edit/${item.id}`)
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
         navigate(`advantage/${id}`)
      }
   }

   const data = advantage
   return (
      <CContainer>
         <CCard>
            <CCardHeader>
               <CRow>
                  <CCol>
                     <CCardTitle>Created Advantages</CCardTitle>
                  </CCol>
                  <CCol sm="3" className="d-flex flex-row-reverse">
                     <CRow>
                        <CButton
                           className="Loat-right"
                           color="success"
                           onClick={() => navigate(`advantage/create`)}
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
                  <CSpinner color="primary" />
               ) : (
                  <TableListContainer>
                     <TableList
                        data={data}
                        columns={columnsConfig}
                        onNavigetToInnerPage={onNavigetToInnerPage}
                        deleteById={deleteGateHandler}
                        setVisible={setVisible}
                        visible={visible}
                        isFetching={isDeleting}
                     />
                     <AppPagination
                        totalPage={advantage.totalPages}
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

export default AdvantageView

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

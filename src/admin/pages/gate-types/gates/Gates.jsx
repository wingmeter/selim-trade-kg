/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react'

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
   CFormSwitch,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate, useParams } from 'react-router'
import styled from 'styled-components'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import {
   useDeleteGateMutation,
   useGetAllGatesQuery,
   useLazyGetGateTypeByIdQuery,
} from '../../../../store/admin/gate-types/gateTypesApi'
import { getImgUrl } from '../../../../utils/helpers/general'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteIcon.svg'
import { ReactComponent as UpdateIcon } from '../../../assets/icons/updateIcon.svg'
import TableList from '../../../components/table/TableList'
import AppPagination from '../../../components/UI/AppPagination'

const GatesView = ({ gates, isFetching }) => {
   const navigate = useNavigate()
   const [visible, setVisible] = useState(false)
   const { gateTypeId } = useParams()
   const [queryParams, setQueryParams] = useState({
      page: 1,
   })
   const [deleteGate, { isLoading: isDeleting }] = useDeleteGateMutation()
   const { getGateTypeById } = useLazyGetGateTypeByIdQuery()
   const handleChangePage = (newPage) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            page: newPage,
         }
      })
   }

   // const { data: gates, isFetching } = useGetAllGatesQuery({
   //    page: 1,
   // })

   const deleteGateHandler = async (gateId) => {
      try {
         await deleteGate(gateId).unwrap()
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
         width: 40,
      },
      {
         key: 'photoUrl',
         header: 'Фото',
         width: 80,

         cell: (item) => (
            <TableImage src={getImgUrl(item.photoUrl)} alt={item.photoUrl} />
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
         width: 120,

         cell: (item) => <span>{item.createdBy.username}</span>,
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
                        navigate(`gate/edit/${item.id}`)
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
         navigate(`gate/${id}`)
      }
   }

   const data = gates
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
                           onClick={() => navigate(`gate/create`)}
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
                        totalPage={gates.totalPages}
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

export default GatesView

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

/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
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
import { GiWindsock } from 'react-icons/gi'
import { useNavigate, useParams } from 'react-router'
import styled from 'styled-components'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import {
   useDeleteGateMutation,
   useLazyGetGateTypeByIdQuery,
} from '../../../../store/admin/gate-types/gateTypesApi'
import { getImgUrl } from '../../../../utils/helpers/general'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteIcon.svg'
import { ReactComponent as UpdateIcon } from '../../../assets/icons/updateIcon.svg'
import { getLastValue } from '../../../components/last-update/LastUpdateList'
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
         key: 'active',
         header: 'Last Update',
         width: 120,
         cell: (item) => <span>{getLastValue(item?.updatedByList)}</span>,
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
                     <CCardTitle>Ворота</CCardTitle>
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
            {data?.length !== 0 ? (
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
            ) : (
               <Flex
                  width="100%"
                  justify="center"
                  align="center"
                  p="30px 20px"
                  gap="20px"
               >
                  <GiWindsock size={30} />
                  <CCardTitle>Ворота ещё не добавлены</CCardTitle>
               </Flex>
            )}
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
   max-width: 100%;
`
const ActionContainer = styled.div`
   display: flex;
   gap: 12px;
   svg {
      cursor: pointer;
   }
`

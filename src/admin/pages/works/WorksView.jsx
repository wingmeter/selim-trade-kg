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
   useDeleteWorksMutation,
   useGetAllWorksQuery,
} from '../../../store/admin/works/worksApi'
import { getImgUrl } from '../../../utils/helpers/general'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg'
import TableList from '../../components/table/TableList'
import AppPagination from '../../components/UI/AppPagination'

const WorksView = () => {
   const navigate = useNavigate()
   const [deleteWorks, { isLoading: isDeleting }] = useDeleteWorksMutation()
   const [visible, setVisible] = useState(false)
   const [queryParams, setQueryParams] = useState({
      page: 1,
   })

   const { data: works, isFetching } = useGetAllWorksQuery({
      pageNo: queryParams.page - 1,
      pageSize: 6,
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
         key: 'photoUrl',
         header: 'Фото',
         width: 125,
         cell: (item) => (
            <TableImage src={getImgUrl(item.photoUrl)} alt={item.photoUrl} />
         ),
      },
      {
         key: 'created_date',
         header: 'Время создания',
         width: 100,
         cell: (item) => <span>{item?.created_date?.split(',')[1]}</span>,
      },
      {
         key: 'created_date',
         header: 'Дата создания',
         width: 120,
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

   const onNavigetToInnerPage = (_, id) => {
      navigate(`${id}`)
   }

   const data = works?.content

   return (
      <CContainer className="mb-5">
         <CCard className="pb-5">
            <CCardHeader>
               <CRow>
                  <CCol>
                     <CCardTitle>Published Works Photos</CCardTitle>
                  </CCol>
                  <CCol sm="3" className="d-flex flex-row-reverse">
                     <CRow>
                        <CButton
                           className="Loat-right"
                           color="success"
                           onClick={() => navigate('/admin/works/create')}
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
                        deleteById={deleteGateTypeHandler}
                        setVisible={setVisible}
                        visible={visible}
                        isFetching={isDeleting}
                     />
                     <AppPagination
                        totalPage={works.totalPages}
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

export default WorksView

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

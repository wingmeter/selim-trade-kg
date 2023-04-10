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
   useDeleteNewsMutation,
   useGetAllNewsQuery,
} from '../../../store/admin/news/newsApi'
import { BASE_URL } from '../../../utils/constants'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg'
import { ReactComponent as UpdateIcon } from '../../assets/icons/updateIcon.svg'
import TableList from '../../components/table/TableList'
import AppPagination from '../../components/UI/AppPagination'

const News = () => {
   const navigate = useNavigate()
   const [deleteGateType, { isLoading: isDeleting }] = useDeleteNewsMutation()
   const [visible, setVisible] = useState(false)
   const [queryParams, setQueryParams] = useState({
      page: 1,
   })

   const { data: news, isFetching } = useGetAllNewsQuery({
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

   const deleteGateTypeHandler = async (id) => {
      try {
         await deleteGateType(id).unwrap()
         setVisible(false)
      } catch (error) {
         console.error(error || 'something went wrong')
      }
   }
   const columns = [
      {
         key: 'id',
         header: 'ID',
         width: 40,
      },
      {
         key: 'photoUrl',
         header: 'Фото',
         width: 80,
         // eslint-disable-next-line react/no-unstable-nested-components
         cell: (item) => (
            <TableImage
               src={`${BASE_URL}${item.photoUrl}`}
               alt={item.photoUrl}
            />
         ),
      },
      { key: 'title', header: 'Title', width: 100 },
      {
         key: 'created_date',
         header: 'Дата создания',
         width: 120,
      },
      {
         key: 'actions',
         header: 'Действия',
         width: 100,
         // eslint-disable-next-line react/no-unstable-nested-components
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

   const onNavigetToInnerPage = (_, id) => {
      navigate(`${id}`)
   }

   const data = news?.content

   return (
      <CContainer className="mb-5">
         <CCard className="pb-5">
            <CCardHeader>
               <CRow>
                  <CCol>
                     <CCardTitle>Created News</CCardTitle>
                  </CCol>
                  <CCol sm="3" className="d-flex flex-row-reverse">
                     <CRow>
                        <CButton
                           className="Loat-right"
                           color="success"
                           onClick={() => navigate('/admin/news/create')}
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
                  <div className="d-flex justify-content-center">
                     <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                     </div>
                  </div>
               ) : (
                  <TableListContainer>
                     {!data?.length ? (
                        <Message>Пока заявок нет</Message>
                     ) : (
                        <>
                           <TableList
                              data={data}
                              columns={columns}
                              onNavigetToInnerPage={onNavigetToInnerPage}
                              deleteById={deleteGateTypeHandler}
                              setVisible={setVisible}
                              visible={visible}
                              isFetching={isDeleting}
                           />
                           <AppPagination
                              totalPage={news.totalPages}
                              page={queryParams.page}
                              onChange={handleChangePage}
                           />
                        </>
                     )}
                  </TableListContainer>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default News

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
const Message = styled.p`
   text-align: center;
   margin-top: 30px;
   font-size: 16px;
`

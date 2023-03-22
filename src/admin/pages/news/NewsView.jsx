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
import { useNavigate } from 'react-router'

import { Flex } from '../../../client/styles/style-for-positions/style'
import { useGetAllNewsQuery } from '../../../store/admin/news/newsApi'
import NewsCard from '../../components/news/NewsCard'

const News = () => {
   const navigate = useNavigate()

   const { data: news, isFetching } = useGetAllNewsQuery({
      page: 3,
   })

   const renderGates = () => {
      return news?.content?.map((newsData) => (
         <NewsCard key={newsData.id} news={newsData} />
      ))
   }

   return (
      <CContainer className="mb-5">
         <CCard>
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
                  <span>Loading...</span>
               ) : (
                  <div>
                     <CRow className="my-2" />

                     <Flex direction="column" gap="20px" p="20px 0px">
                        {renderGates()}
                     </Flex>
                  </div>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default News

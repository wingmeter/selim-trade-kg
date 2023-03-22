import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardImage,
   CCardSubtitle,
   CCardText,
   CCardTitle,
   CCol,
   CContainer,
   CRow,
} from '@coreui/react'
import { useNavigate, useParams } from 'react-router'

import { useGetNewsByIdQuery } from '../../../../store/admin/news/newsApi'
import { BASE_URL } from '../../../../utils/constants'

const NewsInnerView = () => {
   const navigate = useNavigate()
   const { newsId } = useParams()

   const { data: news, isFetching } = useGetNewsByIdQuery(newsId)

   return (
      <CContainer>
         <CCard>
            <CCardHeader className="d-flex align-items-center gap-4">
               <CButton onClick={() => navigate(-1)}>Go Back</CButton>
               <CCardTitle>Gate Inner Page</CCardTitle>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <span>Loading...</span>
               ) : (
                  <CCard style={{ padding: '0.5rem 1rem' }}>
                     <CCardImage
                        src={`${BASE_URL}${news?.photoUrl}`}
                        alt="bg imgae"
                        height={500}
                        style={{ objectFit: 'contain' }}
                     />
                     <br />
                     <CCardTitle>{news?.title}</CCardTitle>
                     <br />
                     <CCardTitle>{news?.description}</CCardTitle>
                     <br />
                     <CCardSubtitle>
                        Created Date: {news?.createdDate}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Created By: {news?.createdBy?.username}
                     </CCardSubtitle>
                     <br />
                     <CCardText>
                        Status:
                        {news?.createdBy?.active ? 'Active' : 'Inactive'}
                     </CCardText>
                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default NewsInnerView

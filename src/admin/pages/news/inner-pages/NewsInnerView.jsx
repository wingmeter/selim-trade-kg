import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardImage,
   CCardSubtitle,
   CCardTitle,
   CContainer,
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
               <CButton onClick={() => navigate(-1)}>Назад</CButton>
               <CCardTitle>Страница новости</CCardTitle>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <div className="d-flex justify-content-center">
                     <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                     </div>
                  </div>
               ) : (
                  <CCard style={{ padding: '0.5rem 1rem' }}>
                     <CCardImage
                        src={`${BASE_URL}${news?.photoUrl}`}
                        alt="bg imgae"
                        height={500}
                        style={{ objectFit: 'contain' }}
                     />
                     <br />
                     <CCardTitle>Заголовок: {news?.title}</CCardTitle>
                     <br />
                     <CCardTitle>Описание: {news?.description}</CCardTitle>
                     <br />
                     <CCardSubtitle>
                        Дата создания: {news?.created_date}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Добавил(-а): {news?.createdBy?.username}
                     </CCardSubtitle>
                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default NewsInnerView

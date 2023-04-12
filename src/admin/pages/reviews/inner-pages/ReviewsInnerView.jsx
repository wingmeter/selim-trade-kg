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

import { useGetReviewsByIdQuery } from '../../../../store/admin/reviews/reviewApi'
import { BASE_URL } from '../../../../utils/constants'

const ReviewsInnerView = () => {
   const navigate = useNavigate()
   const { reviewsId } = useParams()

   const { data: review, isFetching } = useGetReviewsByIdQuery(reviewsId)

   return (
      <CContainer>
         <CCard>
            <CCardHeader className="d-flex align-items-center gap-4">
               <CButton onClick={() => navigate(-1)}>Назад</CButton>
               <CCardTitle>Страница отзыва</CCardTitle>
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
                        src={`${BASE_URL}${review?.photoUrl}`}
                        alt="bg imgae"
                        height={500}
                        style={{ objectFit: 'contain' }}
                     />
                     <br />
                     <CCardTitle>Имя клиента: {review?.name}</CCardTitle>
                     <br />
                     <CCardTitle>Ворота: {review?.gate}</CCardTitle>
                     <br />
                     <CCardSubtitle>Текст отзыва{review?.text}</CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Дата создания: {review?.created_date}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Добавил(-а): {review?.createdBy?.username}
                     </CCardSubtitle>
                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default ReviewsInnerView

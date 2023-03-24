import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardImage,
   CCardSubtitle,
   CCardText,
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
               <CButton onClick={() => navigate(-1)}>Go Back</CButton>
               <CCardTitle>Gate Inner Page</CCardTitle>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <span>Loading...</span>
               ) : (
                  <CCard style={{ padding: '0.5rem 1rem' }}>
                     <CCardImage
                        src={`${BASE_URL}${review?.photoUrl}`}
                        alt="bg imgae"
                        height={500}
                        style={{ objectFit: 'contain' }}
                     />
                     <br />
                     <CCardTitle>{review?.name}</CCardTitle>
                     <br />
                     <CCardTitle>{review?.gate}</CCardTitle>
                     <br />
                     <CCardSubtitle>{review?.text}</CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Created Date: {review?.created_date}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Created By: {review?.createdBy?.username}
                     </CCardSubtitle>
                     <br />
                     <CCardText>
                        Status:
                        {review?.createdBy?.active ? 'Active' : 'Inactive'}
                     </CCardText>
                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default ReviewsInnerView

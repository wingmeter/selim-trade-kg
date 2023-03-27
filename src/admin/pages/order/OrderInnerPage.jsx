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

import { useGetOrderByIdQuery } from '../../../store/admin/order/orderApi'
import { getImgUrl } from '../../../utils/helpers/general'

const OrderInnerPage = () => {
   const navigate = useNavigate()
   const { orderId } = useParams()

   const { data: order, isFetching } = useGetOrderByIdQuery(orderId)

   return (
      <CContainer>
         <CCard>
            <CCardHeader className="d-flex align-items-center gap-4">
               <CButton onClick={() => navigate(-1)}>Go Back</CButton>
               <CCardTitle>Works Inner Page</CCardTitle>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <span>Loading...</span>
               ) : (
                  <CCard style={{ padding: '0.5rem 1rem' }}>
                     <CCardTitle>Name: {order?.name}</CCardTitle>
                     <br />
                     <CCardSubtitle>Message: {order?.message}</CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Phone Number: {order?.phoneNumber}
                     </CCardSubtitle>
                     <br />
                     <CCardText>
                        Status:
                        {order?.createdBy?.active ? 'Active' : 'Inactive'}
                     </CCardText>
                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default OrderInnerPage

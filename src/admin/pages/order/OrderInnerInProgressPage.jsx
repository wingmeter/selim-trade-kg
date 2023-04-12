import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardSubtitle,
   CCardText,
   CCardTitle,
   CContainer,
} from '@coreui/react'
import { useNavigate, useParams } from 'react-router'

import { useGetOrderInProgressByIdQuery } from '../../../store/admin/order/orderApi'

const OrderInnerInProgressPage = () => {
   const navigate = useNavigate()
   const { orderId } = useParams()

   const { data: order, isFetching } = useGetOrderInProgressByIdQuery(orderId)

   return (
      <CContainer>
         <CCard>
            <CCardHeader className="d-flex align-items-center gap-4">
               <CButton onClick={() => navigate(-1)}>Go Back</CButton>
               <CCardTitle>Страница заявки(В процессе)</CCardTitle>
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
                     <CCardTitle>Имя покупателя: {order?.name}</CCardTitle>
                     <br />
                     <CCardSubtitle>
                        Тип ворот: {order?.gateType.name}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>Ворота: {order?.gate.name}</CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Номер телефона: {order?.phoneNumber}
                     </CCardSubtitle>
                     <br />
                     <CCardText>Статус: {order?.status}</CCardText>
                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default OrderInnerInProgressPage

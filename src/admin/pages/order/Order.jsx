/* eslint-disable react/no-unstable-nested-components */
import {
   CCard,
   CCardHeader,
   CCardTitle,
   CCol,
   CContainer,
   CRow,
} from '@coreui/react'

import OrderInProgressTable from './tables/OrderInProgressTable'
import OrderTable from './tables/OrderTable'

const OrderView = () => {
   return (
      <CContainer className="mb-5">
         <CCard className="pb-5">
            <CCardHeader>
               <CRow>
                  <CCol>
                     <CCardTitle>Новые заявки</CCardTitle>
                  </CCol>
               </CRow>
            </CCardHeader>
            <OrderTable />
         </CCard>
         <CCard className="pb-5 mt-5">
            <CCardHeader>
               <CRow>
                  <CCol>
                     <CCardTitle>Заявки (в процессе)</CCardTitle>
                  </CCol>
               </CRow>
            </CCardHeader>
            <OrderInProgressTable />
         </CCard>
      </CContainer>
   )
}

export default OrderView

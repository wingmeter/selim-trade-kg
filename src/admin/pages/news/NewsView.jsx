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

const News = () => {
   const navigate = useNavigate()

   return (
      <CContainer>
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
            <CCardBody>asd</CCardBody>
         </CCard>
      </CContainer>
   )
}

export default News

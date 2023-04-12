import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardSubtitle,
   CCardText,
   CCardTitle,
   CContainer,
   CSpinner,
} from '@coreui/react'
import { useNavigate, useParams } from 'react-router'

import { useGetAdvantageByIdQuery } from '../../../../store/admin/gate-types/gateTypesApi'
import LastUpdateList from '../../../components/last-update/LastUpdateList'

const AdvantageInnerView = () => {
   const navigate = useNavigate()
   const { advantageId } = useParams()

   const { data: advantageData, isFetching } =
      useGetAdvantageByIdQuery(advantageId)

   return (
      <CContainer>
         <CCard textColor="dark" className="mb-3 border-top-dark border-top-3">
            <CCardHeader className="d-flex justify-content-between mb-5 align-items-center">
               <CCardTitle>Страница преимущества</CCardTitle>
               <CButton onClick={() => navigate(-1)}>Назад</CButton>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <CSpinner color="primary" />
               ) : (
                  <CCard style={{ padding: '0.5rem 1rem' }}>
                     <CCardTitle>Название: {advantageData?.title}</CCardTitle>
                     <br />
                     <CCardSubtitle>Описание:</CCardSubtitle>
                     <CCardText>{advantageData?.description}</CCardText>
                     <br />
                     <CCardSubtitle>
                        Дата создания: {advantageData?.created_date}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Добавил(-а): {advantageData?.createdBy?.username}
                     </CCardSubtitle>
                     <br />
                     <LastUpdateList
                        updateByList={advantageData?.updatedByList}
                     />

                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default AdvantageInnerView

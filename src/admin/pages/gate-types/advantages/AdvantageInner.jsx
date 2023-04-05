import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardSubtitle,
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
               <CCardTitle>Advantage Inner Page</CCardTitle>
               <CButton onClick={() => navigate(-1)}>Go Back</CButton>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <CSpinner color="primary" />
               ) : (
                  <CCard style={{ padding: '0.5rem 1rem' }}>
                     <CCardTitle>{advantageData?.title}</CCardTitle>
                     <br />
                     <CCardSubtitle>
                        Description: {advantageData?.description}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Created Date: {advantageData?.created_date}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Created By: {advantageData?.createdBy?.username}
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

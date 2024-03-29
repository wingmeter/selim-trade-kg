import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardImage,
   CCardSubtitle,
   CCardTitle,
   CContainer,
   CSpinner,
} from '@coreui/react'
import { useNavigate, useParams } from 'react-router'

import { useGetSingleGateByIdQuery } from '../../../../store/admin/gate-types/gateTypesApi'
import { getImgUrl } from '../../../../utils/helpers/general'
import LastUpdateList from '../../last-update/LastUpdateList'

const GateInnerView = () => {
   const navigate = useNavigate()
   const { gateId } = useParams()

   const { data: gate, isFetching } = useGetSingleGateByIdQuery(gateId)

   return (
      <CContainer>
         <CCard textColor="dark" className="mb-3 border-top-dark border-top-3">
            <CCardHeader className="d-flex justify-content-between mb-5 align-items-center">
               <CCardTitle>Gate Inner Page</CCardTitle>
               <CButton onClick={() => navigate(-1)}>Go Back</CButton>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <CSpinner color="primary" />
               ) : (
                  <CCard style={{ padding: '0.5rem 1rem' }}>
                     <CCardImage
                        src={getImgUrl(gate?.photoUrl)}
                        alt="bg imgae"
                     />
                     <br />
                     <CCardTitle>{gate?.name}</CCardTitle>
                     <br />
                     <CCardSubtitle>
                        Created Date: {gate?.created_date}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Created By: {gate?.createdBy?.username}
                     </CCardSubtitle>
                     <br />
                     <LastUpdateList updateByList={gate?.updatedByList} />

                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default GateInnerView

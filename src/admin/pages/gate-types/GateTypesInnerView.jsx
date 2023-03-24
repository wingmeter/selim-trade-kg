import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardImage,
   CCardSubtitle,
   CCardText,
   CCardTitle,
   CCol,
   CContainer,
   CRow,
} from '@coreui/react'
import { useNavigate, useParams } from 'react-router'

import { useGetGateTypeByIdQuery } from '../../../store/admin/gate-types/gateTypesApi'
import { BASE_URL } from '../../../utils/constants'
import GateCard from '../../components/gates-type/gates/GateCard'

const GateTypesInnerView = () => {
   const navigate = useNavigate()
   const { typeId } = useParams()

   const { data: gateType, isFetching } = useGetGateTypeByIdQuery(typeId)

   return (
      <CContainer>
         <CCard>
            <CCardHeader>
               <CCardTitle>Gate Inner Page</CCardTitle>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <span>Loading...</span>
               ) : (
                  <CCard style={{ padding: '0.5rem 1rem' }}>
                     <CCardImage
                        src={`${BASE_URL}${gateType?.backgroundUrl}`}
                        alt="bg imgae"
                     />
                     <br />
                     <CCardTitle>{gateType?.name}</CCardTitle>
                     <br />
                     <CCardSubtitle>
                        Created Date: {gateType?.created_date}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Created By: {gateType?.createdBy?.username}
                     </CCardSubtitle>
                     <br />
                     <CCardText>
                        Status:
                        {gateType?.createdBy?.active ? 'Active' : 'Inactive'}
                     </CCardText>
                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
         <br />
         <CCard>
            <CCardHeader className="d-flex justify-content-between mb-5 align-items-center">
               <CCardTitle>Gates</CCardTitle>
               <CButton onClick={() => navigate(`gate/create`)}>
                  Create New Gate
               </CButton>
            </CCardHeader>
            <CRow xs={{ cols: 2, gutter: 1 }} md={{ cols: 3 }}>
               {gateType?.gateList?.map((gate) => (
                  <CCol>
                     <GateCard key={gate.id} gate={gate} gateTypeId={typeId} />
                  </CCol>
               ))}
            </CRow>
         </CCard>
      </CContainer>
   )
}

export default GateTypesInnerView

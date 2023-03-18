import {
   CButton,
   CCard,
   CCardBody,
   CCardGroup,
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

import { Flex } from '../../../client/styles/style-for-positions/style'
import { useGetGateTypeByIdQuery } from '../../../store/admin/gate-types/gateTypesApi'
import { BASE_URL } from '../../../utils/constants'
import GateCard from '../../components/gates/GateCard'

const GateTypesInner = () => {
   const navigate = useNavigate()
   const { typeId } = useParams()

   const { data: gateType, isFetching } = useGetGateTypeByIdQuery(typeId)
   console.log(gateType)

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
                  Add gate
               </CButton>
            </CCardHeader>
            <CRow
               className="gap-3"
               xs={{ cols: 1, gutter: 1 }}
               md={{ cols: 3 }}
            >
               {gateType?.gateList?.map((gate) => (
                  <CCol>
                     <GateCard key={gate.id} gate={gate} />
                  </CCol>
               ))}
            </CRow>
         </CCard>
      </CContainer>
   )
}

export default GateTypesInner

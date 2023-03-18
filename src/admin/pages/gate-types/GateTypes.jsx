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

import { Flex } from '../../../client/styles/style-for-positions/style'
import { useGetAllGateTypesQuery } from '../../../store/admin/gate-types/gateTypesApi'
import GateTypeCard from '../../components/gates-type/GateCard'

const GateTypes = () => {
   const navigate = useNavigate()

   const { data: gateTypes, isFetching } = useGetAllGateTypesQuery({
      page: 3,
   })

   const renderGates = () => {
      return gateTypes?.content?.map((gateType) => (
         <GateTypeCard key={gateType.id} gateType={gateType} />
      ))
   }

   return (
      <CContainer>
         <CCard>
            <CCardHeader>
               <CRow>
                  <CCol>
                     <CCardTitle>Created Gates</CCardTitle>
                  </CCol>
                  <CCol sm="3" className="d-flex flex-row-reverse">
                     <CRow>
                        <CButton
                           className="Loat-right"
                           color="success"
                           onClick={() => navigate('create')}
                        >
                           Создать
                        </CButton>
                     </CRow>
                     <CRow />
                  </CCol>
               </CRow>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <span>Loading...</span>
               ) : (
                  <div>
                     <CRow className="my-2" />

                     <Flex direction="column" gap="20px" p="20px 0px">
                        {renderGates()}
                     </Flex>
                  </div>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default GateTypes

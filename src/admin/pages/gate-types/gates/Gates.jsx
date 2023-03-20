/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react'

import {
   CContainer,
   CButton,
   CCol,
   CRow,
   CCard,
   CCardTitle,
   CCardHeader,
   CCardBody,
} from '@coreui/react'
import { useNavigate } from 'react-router'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import { useGetAllGatesQuery } from '../../../../store/admin/gate-types/gateTypesApi'
import GateCard from '../../../components/gates-type/gates/GateCard'

const Clients = () => {
   const navigate = useNavigate()

   const { data: gates, isFetching } = useGetAllGatesQuery({
      page: 1,
   })

   const renderGates = () => {
      return gates?.content?.map((gate) => (
         <GateCard key={gate.id} gate={gate} />
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
                           onClick={() => navigate('/admin/gates/create')}
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

export default Clients

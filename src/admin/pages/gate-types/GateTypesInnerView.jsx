import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCardImage,
   CCardSubtitle,
   CCardText,
   CCardTitle,
   CContainer,
   CSpinner,
} from '@coreui/react'
import { useNavigate, useParams } from 'react-router'

import { useGetGateTypeByIdQuery } from '../../../store/admin/gate-types/gateTypesApi'
import { BASE_URL } from '../../../utils/constants'

import GatesView from './gates/Gates'

function getLastValue(array) {
   const name = array[array.length - 1]?.username
   const date = array[array.length - 1]?.date

   return `${name}, in ${date}`
}

const GateTypesInnerView = () => {
   const navigate = useNavigate()
   const { typeId } = useParams()

   const { data: gateType, isFetching } = useGetGateTypeByIdQuery(typeId)

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
                     {gateType?.updatedByList.length !== 0 && (
                        <CCardSubtitle className="mb-2 text-medium-emphasis">
                           Last updated by:{' '}
                           <span style={{ color: 'green' }}>
                              {getLastValue(gateType?.updatedByList)}
                           </span>
                        </CCardSubtitle>
                     )}

                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
         <br />
         <GatesView gates={gateType?.gateList} isFetching={isFetching} />
      </CContainer>
   )
}

export default GateTypesInnerView

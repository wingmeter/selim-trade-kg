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

import { useGetGateTypeByIdQuery } from '../../../store/admin/gate-types/gateTypesApi'
import { BASE_URL } from '../../../utils/constants'
import LastUpdateList from '../../components/last-update/LastUpdateList'

import AdvantageView from './advantages/AdvantageView'
import GatesView from './gates/Gates'

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
                     <LastUpdateList updateByList={gateType?.updatedByList} />

                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
         <br />
         <GatesView gates={gateType?.gateList} isFetching={isFetching} />
         <br />
         <AdvantageView
            advantage={gateType?.advantageList}
            isFetching={isFetching}
         />
      </CContainer>
   )
}

export default GateTypesInnerView

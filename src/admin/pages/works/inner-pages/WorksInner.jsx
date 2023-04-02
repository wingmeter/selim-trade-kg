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

import { useGetWorksByIdQuery } from '../../../../store/admin/works/worksApi'
import { getImgUrl } from '../../../../utils/helpers/general'

const WorksInner = () => {
   const navigate = useNavigate()
   const { worksId } = useParams()

   const { data: work, isFetching } = useGetWorksByIdQuery(worksId)

   return (
      <CContainer>
         <CCard>
            <CCardHeader className="d-flex align-items-center gap-4">
               <CButton onClick={() => navigate(-1)}>Go Back</CButton>
               <CCardTitle>Works Inner Page</CCardTitle>
            </CCardHeader>
            <CCardBody>
               {isFetching ? (
                  <CSpinner color="primary" />
               ) : (
                  <CCard style={{ padding: '0.5rem 1rem' }}>
                     <CCardImage
                        src={getImgUrl(work?.photoUrl)}
                        alt={work?.photoUrl}
                        height={500}
                        style={{ objectFit: 'contain' }}
                     />
                     <br />
                     <CCardTitle>{work?.title}</CCardTitle>
                     <br />
                     <CCardSubtitle>
                        Created Date: {work?.created_date}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Created By: {work?.createdBy?.username || 'admin'}
                     </CCardSubtitle>
                     <br />
                  </CCard>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default WorksInner

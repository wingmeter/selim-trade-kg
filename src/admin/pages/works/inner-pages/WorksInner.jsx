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
               <CButton onClick={() => navigate(-1)}>Назад</CButton>
               <CCardTitle>Страница работы</CCardTitle>
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
                     <CCardSubtitle>
                        Дата создания: {work?.created_date}
                     </CCardSubtitle>
                     <br />
                     <CCardSubtitle>
                        Добавил (-а): {work?.createdBy?.username || 'admin'}
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

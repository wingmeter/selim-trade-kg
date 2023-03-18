import { cilOpentype, cilPen, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
   CButton,
   CCard,
   CCardBody,
   CCardFooter,
   CCardImage,
   CCardSubtitle,
   CCardText,
   CCardTitle,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router'

import { Flex } from '../../../client/styles/style-for-positions/style'
import { BASE_URL, ROLES } from '../../../utils/constants'
import { checkRole } from '../../../utils/helpers/general'

const GateTypeCard = ({ gateType }) => {
   const navigate = useNavigate()
   return (
      <CCard key={gateType.id}>
         <CCardImage
            src={`${BASE_URL}${gateType.backgroundUrl}`}
            // width={200}
            // height={200}
            rounded
         />
         <CCardBody>
            <CCardTitle>{gateType.name}</CCardTitle>
            <CCardSubtitle>Created Date: {gateType.created_date}</CCardSubtitle>
            <CCardSubtitle>
               Created By: {gateType.createdBy?.username}
            </CCardSubtitle>
            <CCardText>
               Status:
               {gateType.createdBy?.active ? 'Active' : 'Inactive'}
            </CCardText>
         </CCardBody>

         <Flex width="100%" justify="end" gap="20px" p="10px">
            {checkRole(ROLES.SUPER_ADMIN) && 'block gateType'}
            <CButton onClick={() => null}>add gate</CButton>
            <CButton onClick={() => navigate(`${gateType?.id}`)}>
               Details
            </CButton>
            <IconButton>
               <CIcon icon={cilPen} />
            </IconButton>
            <IconButton>
               <CIcon icon={cilTrash} />
            </IconButton>
         </Flex>
         <CCardFooter>
            <small className="text-medium-emphasis">
               Last updated : {gateType.updated_date}
            </small>
         </CCardFooter>
      </CCard>
   )
}

export default GateTypeCard

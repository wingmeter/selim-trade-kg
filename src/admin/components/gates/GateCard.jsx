import { cilPen, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
   CCard,
   CCardBody,
   CCardFooter,
   CCardImage,
   CCardImageOverlay,
   CCardSubtitle,
   CCardText,
   CCardTitle,
} from '@coreui/react'
import { IconButton } from '@mui/material'

import { Flex } from '../../../client/styles/style-for-positions/style'
import { BASE_URL, ROLES } from '../../../utils/constants'
import { checkRole } from '../../../utils/helpers/general'

const GateCard = ({ gate }) => {
   return (
      <CCard key={gate.id}>
         <CCardImage src={`${BASE_URL}${gate.photoUrl}`} height={350} rounded />
         <CCardBody>
            <CCardTitle>{gate.name}</CCardTitle>
            <br />
            <CCardSubtitle>Created Date: {gate.created_date}</CCardSubtitle>
            <br />
            <CCardSubtitle>
               Created By: {gate.createdBy?.username}
            </CCardSubtitle>
            <br />
            <CCardText>
               Status:
               {gate.createdBy?.active ? 'Active' : 'Inactive'}
            </CCardText>
         </CCardBody>

         <Flex width="100%" justify="end" gap="20px" p="10px">
            {checkRole(ROLES.SUPER_ADMIN) && 'block gate'}
            <IconButton>
               <CIcon icon={cilPen} />
            </IconButton>
            <IconButton>
               <CIcon icon={cilTrash} />
            </IconButton>
         </Flex>
         <CCardFooter>
            <small className="text-medium-emphasis">
               Last updated : {gate.updated_date}
            </small>
         </CCardFooter>
      </CCard>
   )
}

export default GateCard

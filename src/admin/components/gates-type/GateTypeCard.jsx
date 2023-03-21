import { useState } from 'react'

import { cilPen, cilTrash } from '@coreui/icons'
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
   CModal,
   CModalBody,
   CModalFooter,
   CModalHeader,
   CModalTitle,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router'

import { Flex } from '../../../client/styles/style-for-positions/style'
import { useDeleteGateTypeMutation } from '../../../store/admin/gate-types/gateTypesApi'
import { BASE_URL, ROLES } from '../../../utils/constants'
import { checkRole } from '../../../utils/helpers/general'

const GateTypeCard = ({ gateType }) => {
   const navigate = useNavigate()
   const [visible, setVisible] = useState(false)

   const [deleteGateType, { isLoading: isDeleting }] =
      useDeleteGateTypeMutation()

   const deleteGateTypeHandler = async () => {
      try {
         await deleteGateType(gateType?.id).unwrap()
         setVisible(false)
      } catch (error) {
         console.error(error || 'something went wrong')
      }
   }
   return (
      <>
         <CModal
            alignment="center"
            visible={visible}
            onClose={() => setVisible(false)}
         >
            <CModalHeader>
               <CModalTitle>Delete Gate Type</CModalTitle>
            </CModalHeader>
            <CModalBody>
               Are you really want to delete this gate type ? All informations
               will be removed!
            </CModalBody>
            <CModalFooter>
               <CButton
                  disabled={isDeleting}
                  color="secondary"
                  onClick={() => setVisible(false)}
               >
                  Close
               </CButton>
               <CButton
                  disabled={isDeleting}
                  color="primary"
                  onClick={deleteGateTypeHandler}
               >
                  Delete
               </CButton>
            </CModalFooter>
         </CModal>

         <CCard key={gateType.id}>
            <CCardImage
               src={`${BASE_URL}${gateType.backgroundUrl}`}
               // width={200}
               // height={200}
               rounded
            />
            <CCardBody>
               <CCardTitle>{gateType.name}</CCardTitle>
               <CCardSubtitle>
                  Created Date: {gateType.created_date}
               </CCardSubtitle>
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
                  <CIcon
                     icon={cilPen}
                     onClick={() => navigate(`edit/${gateType.id}`)}
                  />
               </IconButton>
               <IconButton>
                  <CIcon
                     icon={cilTrash}
                     onClick={() => setVisible(gateType.id)}
                  />
               </IconButton>
            </Flex>
            <CCardFooter>
               <small className="text-medium-emphasis">
                  Last updated : {gateType.updated_date}
               </small>
            </CCardFooter>
         </CCard>
      </>
   )
}

export default GateTypeCard

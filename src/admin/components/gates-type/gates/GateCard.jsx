/* eslint-disable no-alert */
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

import { Flex } from '../../../../client/styles/style-for-positions/style'
import {
   useLazyGetGateTypeByIdQuery,
   useDeleteGateMutation,
} from '../../../../store/admin/gate-types/gateTypesApi'
import { BASE_URL, ROLES } from '../../../../utils/constants'
import { checkRole } from '../../../../utils/helpers/general'

const GateCard = ({ gate, gateTypeId }) => {
   const [visible, setVisible] = useState(false)

   const [deleteGate, { isLoading: isDeleting }] = useDeleteGateMutation()
   const { getGateTypeById } = useLazyGetGateTypeByIdQuery()

   const deleteGateHandler = async () => {
      try {
         await deleteGate(gate.id).unwrap()
         setVisible(false)
         getGateTypeById(gateTypeId)
      } catch (error) {
         console.log(error || 'something went wrong')
      }
   }

   const editGateHandler = (gateId) => {
      // navigate to form with id
   }
   return (
      <>
         <CModal
            alignment="center"
            visible={visible}
            onClose={() => setVisible(false)}
         >
            <CModalHeader>
               <CModalTitle>Delete Gate</CModalTitle>
            </CModalHeader>
            <CModalBody>
               Are you really want to delete this gate ? All informations will
               be removed!
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
                  onClick={deleteGateHandler}
               >
                  Delete
               </CButton>
            </CModalFooter>
         </CModal>

         <CCard key={gate.id}>
            <CCardImage
               src={`${BASE_URL}${gate.photoUrl}`}
               height={250}
               rounded
            />
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
                  <CIcon
                     icon={cilPen}
                     onClick={() => editGateHandler(gate.id)}
                  />
               </IconButton>
               <IconButton>
                  <CIcon icon={cilTrash} onClick={() => setVisible(gate.id)} />
               </IconButton>
            </Flex>
            <CCardFooter>
               <small className="text-medium-emphasis">
                  Last updated : {gate.updated_date}
               </small>
            </CCardFooter>
         </CCard>
      </>
   )
}

export default GateCard

import React from 'react'

import {
   CButton,
   CModal,
   CModalBody,
   CModalFooter,
   CModalHeader,
   CModalTitle,
} from '@coreui/react'

const Modal = ({ visible, setVisible, children, title }) => {
   return (
      <CModal
         alignment="center"
         visible={visible}
         onClose={() => setVisible(false)}
      >
         <CModalHeader>
            <CModalTitle>{title}</CModalTitle>
         </CModalHeader>
         <CModalBody>{children}</CModalBody>
         <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
               Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
         </CModalFooter>
      </CModal>
   )
}

export default Modal

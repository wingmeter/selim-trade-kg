import React, { useState } from 'react'

import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCol,
   CContainer,
   CFormInput,
   CFormLabel,
   CImage,
   CRow,
} from '@coreui/react'
import { useNavigate } from 'react-router'

import { Flex } from '../../../client/styles/style-for-positions/style'

const CreateGate = () => {
   const navigate = useNavigate()
   const [name, setName] = useState('')
   const [image, setImage] = useState(null)
   const [loading, setLoading] = useState(false)

   const addNewGateHandler = (data) => {
      console.log(data)
   }

   return (
      <CContainer>
         <CCard>
            <CCardHeader className="d-flex flex-row align-items-center">
               <CCol>Create Gate</CCol>
               <CButton onClick={() => navigate(-1)}>Go Back</CButton>
            </CCardHeader>
            <CCardBody>
               {loading ? (
                  <span>Loading...</span>
               ) : (
                  <CCol>
                     <CRow>
                        <CFormLabel>Name</CFormLabel>
                        <CFormInput
                           placeholder="Name"
                           type="string"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                        />
                     </CRow>
                     <br />
                     <CRow>
                        <CFormLabel>Image</CFormLabel>
                        <CFormInput
                           placeholder="download imgae"
                           type="file"
                           onChange={(e) => setImage(e.target.value)}
                        />
                     </CRow>
                     {image && <CImage src={image} />}
                     <br />
                     <Flex margin="20px 0px">
                        <CButton onClick={addNewGateHandler}>Добавить</CButton>
                     </Flex>
                  </CCol>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default CreateGate

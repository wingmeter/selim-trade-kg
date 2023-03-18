import React, { useEffect, useState } from 'react'

import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCol,
   CContainer,
   CForm,
   CFormInput,
   CFormLabel,
   CImage,
   CRow,
} from '@coreui/react'
import { useNavigate } from 'react-router'

import { Flex } from '../../../client/styles/style-for-positions/style'
import { useCreateGateMutation } from '../../../store/admin/gates/gatesApi'

const CreateGateForm = () => {
   const navigate = useNavigate()
   const [name, setName] = useState('')
   const [images, setImage] = useState({ image: null, file: null })
   const [errorPhoto, setErrorPhoto] = useState(false)
   const [validated, setValidated] = useState(false)

   const [createGate, { isLoading }] = useCreateGateMutation()

   const navigateToLogin = () => {
      navigate('/admin/gates')
   }

   const onDrop = ({ target }) => {
      const fileData = target.files
      if (fileData[0].size / 1000 < 5000) {
         const img = URL.createObjectURL(fileData[0])
         setImage({ image: img, file: fileData[0] })
         setErrorPhoto(false)
      } else {
         setErrorPhoto(true)
      }
   }

   const submitHandler = async () => {
      if (!images.file && !name) {
         setValidated(true)
         return
      }
      setValidated(true)

      const formData = new FormData()
      const gateData = {
         name,
         // id: getAdminId(),
         image: formData.append('image', images.file),
      }

      try {
         await createGate({ gateData }).unwrap()
         navigateToLogin()
      } catch (e) {
         console.log(e)
      }
   }

   useEffect(() => {
      const errorPhotoTime = setTimeout(() => {
         setErrorPhoto(false)
      }, 2000)
      return () => {
         clearTimeout(errorPhotoTime)
      }
   }, [errorPhoto])

   return (
      <CContainer>
         <CCard>
            <CCardHeader className="d-flex flex-row align-items-center">
               <CCol>Add Gate</CCol>
            </CCardHeader>
            <CCardBody>
               <CForm validated={validated}>
                  <Flex direction="column" p="1rem 16px">
                     <CRow>
                        <CFormLabel>Name</CFormLabel>
                        <CFormInput
                           placeholder="Gate Name"
                           type="string"
                           value={name}
                           required
                           onChange={(e) => setName(e.target.value)}
                           id="validationTextarea"
                           feedbackInvalid="name is empty"
                           aria-label="file example"
                        />
                     </CRow>
                     <br />
                     <CRow>
                        <CFormLabel>Image</CFormLabel>
                        <CFormInput
                           type="file"
                           onChange={onDrop}
                           id="validationTextarea"
                           feedbackInvalid="Image is not selected"
                           aria-label="file example"
                           required
                        />
                     </CRow>
                  </Flex>

                  {images.image && (
                     <CImage
                        src={images.image}
                        alt="uploaded image"
                        width={300}
                        rounded
                     />
                  )}
                  <br />
                  <Flex margin="20px 0px" justify="end">
                     <CButton disabled={isLoading} onClick={submitHandler}>
                        Добавить
                     </CButton>
                  </Flex>
               </CForm>
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default CreateGateForm

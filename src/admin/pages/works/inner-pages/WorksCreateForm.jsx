/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import { cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCol,
   CForm,
   CFormInput,
   CFormLabel,
   CImage,
   CRow,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate, useParams } from 'react-router'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import { useLazyGetNewsByIdQuery } from '../../../../store/admin/news/newsApi'
import { useCreateWorksMutation } from '../../../../store/admin/works/worksApi'
import { getErrorMessage, getImgUrl } from '../../../../utils/helpers/general'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../../components/UI/notification/Notification'

const CreateWorksForm = () => {
   const navigate = useNavigate()
   const { worksId } = useParams()

   const [images, setImage] = useState({ image: null, file: null })
   const [errorPhoto, setErrorPhoto] = useState(false)
   const [validated, setValidated] = useState(false)

   const [createWorks, { isLoading }] = useCreateWorksMutation()
   const [getWorksById, { data: works }] = useLazyGetNewsByIdQuery()

   const navigateBack = () => {
      navigate(-1)
      showSuccessMessage({ message: 'Successfully published works photo!' })
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
      if (!images.file) {
         setValidated(true)
         return
      }

      const formData = new FormData()
      formData.append('image', images.file)

      if (!worksId && images.file) {
         try {
            await createWorks(formData).unwrap()
            navigateBack()
         } catch (e) {
            showErrorMessage({ message: getErrorMessage(e) })
         }
      }
   }

   // ------------effects------------------
   useEffect(() => {
      if (worksId) getWorksById(worksId)
   }, [])

   useEffect(() => {
      const errorPhotoTime = setTimeout(() => {
         setErrorPhoto(false)
      }, 2000)
      return () => {
         clearTimeout(errorPhotoTime)
      }
   }, [errorPhoto])

   return (
      <CCard>
         <CCardHeader className="d-flex flex-row align-items-center">
            <CCol>Create Our Works</CCol>
            <CButton onClick={() => navigate(-1)}>Go Back</CButton>
         </CCardHeader>
         <CCardBody>
            <CForm validated={validated}>
               <Flex direction="column" p="1rem 16px">
                  {!images.file && !images.image && (
                     <CRow>
                        <CCol>
                           <CFormLabel>Image</CFormLabel>
                           <CFormInput
                              type="file"
                              onChange={onDrop}
                              id="validationTextarea"
                              feedbackInvalid="Image is not selected"
                              aria-label="file example"
                              required
                           />
                        </CCol>
                     </CRow>
                  )}
               </Flex>

               {images.image && (
                  <Flex direction="column">
                     <CImage
                        src={images.image}
                        alt="uploaded image"
                        width={300}
                        rounded
                     />
                     <Flex align="center">
                        Delete Photo
                        <IconButton>
                           <CIcon
                              icon={cilTrash}
                              onClick={() =>
                                 setImage({ image: null, file: null })
                              }
                           />
                        </IconButton>
                     </Flex>
                  </Flex>
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
   )
}

export default CreateWorksForm

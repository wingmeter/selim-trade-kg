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
// eslint-disable-next-line no-unused-vars
import { useSearchParams } from 'react-router-dom'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import {
   useCreateGateMutation,
   useLazyGetSingleGateByIdQuery,
   useUpdateGateMutation,
} from '../../../../store/admin/gate-types/gateTypesApi'
import { getImgUrl } from '../../../../utils/helpers/general'

const CreateGate = () => {
   const navigate = useNavigate()
   const { typeId, gateId } = useParams()
   const [name, setName] = useState('')
   const [images, setImage] = useState({ image: null, file: null })
   const [errorPhoto, setErrorPhoto] = useState(false)
   const [validated, setValidated] = useState(false)

   const [createGate, { isLoading }] = useCreateGateMutation()
   // eslint-disable-next-line no-unused-vars
   const [updateGate, { isUpdating }] = useUpdateGateMutation()
   const [getSingleGateById, { data: gate }] = useLazyGetSingleGateByIdQuery()

   const navigateToLogin = () => {
      navigate(-1)
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
      formData.append('name', name)
      formData.append('image', images.file)
      if (!images.file) {
         formData.delete('image')
      }
      console.log(formData)

      if (!gateId) {
         try {
            await createGate({ formData, gateTypeId: typeId }).unwrap()
            navigateToLogin()
         } catch (e) {
            console.error(e)
         }
      } else {
         try {
            await updateGate({ formData, gateId }).unwrap()
            navigateToLogin()
         } catch (e) {
            console.error(e)
         }
      }
   }

   // ------------effects------------------------------------
   useEffect(() => {
      if (gateId) getSingleGateById({ gateId })
   }, [])

   useEffect(() => {
      setImage({
         image: getImgUrl(gate?.photoUrl) || null,
      })
      setName(gate?.name || '')
   }, [gate])

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
            <CCol>{gateId ? 'Edit Gate' : 'Create Gate'}</CCol>
            <CButton onClick={() => navigate(-1)}>Go Back</CButton>
         </CCardHeader>
         <CCardBody>
            <CForm validated={validated}>
               <Flex direction="column" p="1rem 16px">
                  <CRow>
                     <CFormLabel>Name</CFormLabel>
                     <CFormInput
                        placeholder="Gate Name"
                        type="string"
                        value={name || ''}
                        required
                        onChange={(e) => setName(e.target.value)}
                        id="validationTextarea"
                        feedbackInvalid="name is empty"
                        aria-label="file example"
                     />
                  </CRow>
                  <br />
                  {!images.file && !images.image && (
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

export default CreateGate
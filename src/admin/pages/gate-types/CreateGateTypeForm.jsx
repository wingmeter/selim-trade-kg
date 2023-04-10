import { useEffect, useState } from 'react'

import { cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
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
   CFormTextarea,
   CImage,
   CRow,
   CSpinner,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate, useParams } from 'react-router'

import { Flex } from '../../../client/styles/style-for-positions/style'
import {
   useCreateGateTypeMutation,
   useLazyGetGateTypeByIdQuery,
   useUpdateGateTypeMutation,
} from '../../../store/admin/gate-types/gateTypesApi'
import { getErrorMessage, getImgUrl } from '../../../utils/helpers/general'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../components/UI/notification/Notification'

const CreateGate = () => {
   const navigate = useNavigate()
   const [name, setName] = useState('')
   const [description, setDescription] = useState('')
   const [images, setImage] = useState({ image: null, file: null })
   const [errorPhoto, setErrorPhoto] = useState(false)
   const [validated, setValidated] = useState(false)
   const { typeId } = useParams()

   const [createGateType, { isLoading }] = useCreateGateTypeMutation()
   const [getGateTypeById, { data: gateType }] = useLazyGetGateTypeByIdQuery()
   // eslint-disable-next-line no-unused-vars
   const [updateGateType, { isUpdating }] = useUpdateGateTypeMutation()

   // drop image
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
   // create gate type
   const submitHandler = async () => {
      if (!images.file && !name && !description) {
         setValidated(true)
         return
      }
      setValidated(true)

      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', description)
      formData.append('image', images.file)

      if (!typeId) {
         try {
            await createGateType(formData).unwrap()
            navigate('/admin/gate-types')
            showSuccessMessage({ message: 'Successfully created new type' })
         } catch (error) {
            showErrorMessage({ message: getErrorMessage(error) })
         }
      } else {
         try {
            await updateGateType({ formData, typeId }).unwrap()
            navigate('/admin/gate-types')
         } catch (error) {
            showErrorMessage({ message: getErrorMessage(error) })
         }
      }
   }
   // ------------effects------------------------------------
   useEffect(() => {
      if (typeId) getGateTypeById(typeId)
   }, [])

   useEffect(() => {
      setImage({
         image: getImgUrl(gateType?.backgroundUrl) || null,
         file: null,
      })
      setName(gateType?.name || '')
      setDescription(gateType?.description || '')
   }, [gateType])

   useEffect(() => {
      const errorPhotoTime = setTimeout(() => {
         setErrorPhoto(false)
      }, 2000)
      return () => {
         clearTimeout(errorPhotoTime)
      }
   }, [errorPhoto])
   const buttonName = typeId ? 'обновить' : 'добавить'
   return (
      <CContainer>
         <CCard>
            <CCardHeader className="d-flex flex-row align-items-center">
               <CCol>Create Gate Types</CCol>
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
                           feedbackInvalid="Name is empty"
                           aria-label="file example"
                        />
                     </CRow>
                     <br />
                     <CRow>
                        <CFormLabel>Description</CFormLabel>
                        <CFormTextarea
                           placeholder="Description"
                           rows={4}
                           text="Must be 8-20 words long."
                           type="string"
                           value={description || ''}
                           required
                           onChange={(e) => setDescription(e.target.value)}
                           id="validationTextarea"
                           feedbackInvalid="Description is empty"
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

                  {images?.image && (
                     <Flex direction="column">
                        <CImage
                           src={images?.image}
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
                     <CButton
                        disabled={isUpdating || isLoading}
                        onClick={submitHandler}
                     >
                        {isUpdating || isLoading ? (
                           <CSpinner size="20px" />
                        ) : (
                           buttonName
                        )}
                     </CButton>
                  </Flex>
               </CForm>
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default CreateGate

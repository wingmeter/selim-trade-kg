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
   CSpinner,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate, useParams } from 'react-router'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import {
   useCreateGateMutation,
   useLazyGetSingleGateByIdQuery,
   useUpdateGateMutation,
} from '../../../../store/admin/gate-types/gateTypesApi'
import { getErrorMessage, getImgUrl } from '../../../../utils/helpers/general'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../../components/UI/notification/Notification'

const CreateGate = () => {
   const navigate = useNavigate()
   const { typeId, gateId } = useParams()
   const [name, setName] = useState('')
   const [images, setImage] = useState({ image: null, file: null })
   const [errorPhoto, setErrorPhoto] = useState(false)
   const [validated, setValidated] = useState(false)

   const [createGate, { isLoading }] = useCreateGateMutation()
   const [updateGate, { isUpdating }] = useUpdateGateMutation()
   const [getSingleGateById, { data: gate }] = useLazyGetSingleGateByIdQuery()

   const navigateToLogin = () => {
      window.scrollTo(0, document.body.scrollHeight)
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

      if (!gateId) {
         try {
            await createGate({ formData, gateTypeId: typeId }).unwrap()
            navigateToLogin()
            showSuccessMessage({
               message: 'Succesfully added new gate!',
            })
         } catch (e) {
            showErrorMessage({ message: getErrorMessage(e) })
         }
      } else {
         try {
            await updateGate({ formData, gateId }).unwrap()
            navigateToLogin()
            showSuccessMessage({
               message: 'Succesfully updated gate!',
            })
         } catch (e) {
            showErrorMessage({ message: getErrorMessage(e) })
         }
      }
   }

   // ------------effects------------------------------------
   useEffect(() => {
      if (gateId) getSingleGateById(gateId)
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

   const buttonName = gateId ? 'обновить' : 'добавить'

   return (
      <CCard>
         <CCardHeader className="d-flex flex-row align-items-center">
            <CCol>{gateId ? 'Изменить данные' : 'Добавление ворот'}</CCol>
            <CButton onClick={() => navigate(-1)}>Назад</CButton>
         </CCardHeader>
         <CCardBody>
            <CForm validated={validated}>
               <Flex direction="column" p="1rem 16px">
                  <CRow>
                     <CFormLabel>Название</CFormLabel>
                     <CFormInput
                        placeholder="Название"
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
                        <CFormLabel>Фото</CFormLabel>
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
                        Удалить
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
                     disabled={isLoading || isUpdating}
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
   )
}

export default CreateGate

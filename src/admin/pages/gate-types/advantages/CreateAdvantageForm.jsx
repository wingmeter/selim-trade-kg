import { useEffect, useState } from 'react'

import {
   CButton,
   CCard,
   CCardBody,
   CCardHeader,
   CCol,
   CForm,
   CFormInput,
   CFormLabel,
   CFormTextarea,
   CRow,
   CSpinner,
} from '@coreui/react'
import { useNavigate, useParams } from 'react-router'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import {
   useCreateAdvantageMutation,
   useLazyGetAdvantageByIdQuery,
   useUpdateAdvantageMutation,
} from '../../../../store/admin/gate-types/gateTypesApi'
import { getErrorMessage } from '../../../../utils/helpers/general'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../../components/UI/notification/Notification'

const CreateAdvantageForm = () => {
   const navigate = useNavigate()
   const { typeId, advantageId } = useParams()
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [validated, setValidated] = useState(false)

   const [createAdvantage, { isLoading }] = useCreateAdvantageMutation()
   const [updateAdvantage, { isUpdating }] = useUpdateAdvantageMutation()
   const [getAdvantageById, { data: advantage }] =
      useLazyGetAdvantageByIdQuery()

   const goBackHandler = () => {
      window.scrollTo(0, document.body.scrollHeight)
      navigate(-1)
   }

   const submitHandler = async () => {
      if (!description && !title) {
         setValidated(true)
         return
      }
      setValidated(true)

      const formData = {
         title,
         description,
      }

      if (!advantageId) {
         try {
            await createAdvantage({ formData, gateTypeId: typeId }).unwrap()
            goBackHandler()
            showSuccessMessage({
               message: 'Succesfully published new advantage!',
            })
         } catch (e) {
            showErrorMessage({ message: getErrorMessage(e) })
         }
      } else {
         try {
            await updateAdvantage({ formData, advantageId }).unwrap()
            goBackHandler()
            showSuccessMessage({
               message: 'Succesfully updated advantage!',
            })
         } catch (e) {
            showErrorMessage({ message: getErrorMessage(e) })
         }
      }
   }

   // ------------effects------------------------------------
   useEffect(() => {
      if (advantageId) getAdvantageById(advantageId)
   }, [])

   useEffect(() => {
      setDescription(advantage?.description || '')
      setTitle(advantage?.title || '')
   }, [advantage])

   const buttonName = advantageId ? 'обновить' : 'добавить'

   return (
      <CCard>
         <CCardHeader className="d-flex flex-row align-items-center">
            <CCol>{advantageId ? 'Edit Advantage' : 'Create Advantage'}</CCol>
            <CButton onClick={() => navigate(-1)}>Go Back</CButton>
         </CCardHeader>
         <CCardBody>
            <CForm validated={validated}>
               <Flex direction="column" p="1rem 16px">
                  <CRow>
                     <CFormLabel>Title</CFormLabel>
                     <CFormInput
                        placeholder="Title Advantage"
                        type="string"
                        value={title || ''}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        id="validationTextarea"
                        feedbackInvalid="name is empty"
                        aria-label="file example"
                     />
                  </CRow>
                  <br />
                  <CRow>
                     <CFormLabel>Description</CFormLabel>
                     <CFormTextarea
                        placeholder="Description Advantage"
                        rows={4}
                        text="Must be 8-20 words long."
                        type="string"
                        value={description || ''}
                        onChange={(e) => setDescription(e.target.value)}
                        id="validationTextarea"
                        feedbackInvalid="Description is empty"
                        required
                     />
                  </CRow>
               </Flex>

               <br />
               <Flex margin="20px 0px" justify="end">
                  <CButton disabled={isLoading} onClick={submitHandler}>
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

export default CreateAdvantageForm

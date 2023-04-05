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
} from '@coreui/react'
import { useNavigate, useParams } from 'react-router'
// eslint-disable-next-line no-unused-vars
import { useSearchParams } from 'react-router-dom'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import {
   useCreateAdvantageMutation,
   useLazyGetAdvantageByIdQuery,
   useUpdateAdvantageMutation,
} from '../../../../store/admin/gate-types/gateTypesApi'

const CreateAdvantageForm = () => {
   const navigate = useNavigate()
   const { typeId, advantageId } = useParams()
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [validated, setValidated] = useState(false)

   const [createAdvantage, { isLoading }] = useCreateAdvantageMutation()
   // eslint-disable-next-line no-unused-vars
   const [updateAdvantage, { isUpdating }] = useUpdateAdvantageMutation()
   const [getAdvantageById, { data: advantage }] =
      useLazyGetAdvantageByIdQuery()

   const navigateToLogin = () => {
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
            navigateToLogin()
         } catch (e) {
            console.error(e)
         }
      } else {
         try {
            await updateAdvantage({ formData, advantageId }).unwrap()
            navigateToLogin()
         } catch (e) {
            console.error(e)
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
                     Добавить
                  </CButton>
               </Flex>
            </CForm>
         </CCardBody>
      </CCard>
   )
}

export default CreateAdvantageForm

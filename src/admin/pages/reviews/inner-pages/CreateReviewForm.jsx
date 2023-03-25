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
   CImage,
   CRow,
} from '@coreui/react'
import { useNavigate, useParams } from 'react-router'
// eslint-disable-next-line no-unused-vars
import { useSearchParams } from 'react-router-dom'

import { Flex } from '../../../../client/styles/style-for-positions/style'
import {
   useLazyGetReviewsByIdQuery,
   useCreateReviewsMutation,
   useUpdateReviewsMutation,
} from '../../../../store/admin/reviews/reviewApi'
import { getImgUrl } from '../../../../utils/helpers/general'

const CreateReviewForm = () => {
   const navigate = useNavigate()
   const { reviewsId } = useParams()

   const [name, setName] = useState('')
   const [text, setText] = useState('')
   const [gate, setGate] = useState('')
   const [images, setImage] = useState({ image: null, file: null })
   const [errorPhoto, setErrorPhoto] = useState(false)
   const [validated, setValidated] = useState(false)

   const [createReviews, { isLoading }] = useCreateReviewsMutation()
   // eslint-disable-next-line no-unused-vars
   const [updateReviews, { isUpdating }] = useUpdateReviewsMutation()
   const [getReviewsById, { data: reviews }] = useLazyGetReviewsByIdQuery()

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
      if (!images.file && !name && !text && !gate) {
         setValidated(true)
      }

      const formData = new FormData()
      formData.append('name', name)
      formData.append('text', text)
      formData.append('gate', gate)
      formData.append('image', images.file)

      if (!reviewsId) {
         try {
            await createReviews(formData).unwrap()
            navigateToLogin()
         } catch (e) {
            console.error(e)
         }
      } else {
         try {
            await updateReviews({ formData, reviewId: reviewsId })
            navigateToLogin()
         } catch (e) {
            console.error(e)
         }
      }
   }

   // ------------effects------------------------------------
   useEffect(() => {
      if (reviewsId) getReviewsById(reviewsId)
   }, [])

   useEffect(() => {
      setImage({ image: getImgUrl(reviews?.photoUrl) || null })
      setName(reviews?.name || '')
      setText(reviews?.text || '')
      setGate(reviews?.gate || '')
   }, [reviews])

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
            <CCol>Create Review</CCol>
            <CButton onClick={() => navigate(-1)}>Go Back</CButton>
         </CCardHeader>
         <CCardBody>
            <CForm validated={validated}>
               <Flex direction="column" p="1rem 16px">
                  <CRow>
                     <CFormLabel>Name</CFormLabel>
                     <CFormInput
                        placeholder="Reviews Name"
                        type="string"
                        value={name || ''}
                        required
                        onChange={(e) => setName(e.target.value)}
                        id="validationTextarea"
                        feedbackInvalid="Name is required"
                        aria-label="file example"
                     />
                  </CRow>
                  <br />
                  <CRow>
                     <CFormLabel>Text</CFormLabel>
                     <CFormInput
                        placeholder="Reviews Text"
                        type="string"
                        value={text || ''}
                        required
                        onChange={(e) => setText(e.target.value)}
                        id="validationTextarea"
                        feedbackInvalid="Text is required"
                        aria-label="file example"
                     />
                  </CRow>
                  <br />
                  <CRow>
                     <CFormLabel>Gate</CFormLabel>
                     <CFormInput
                        placeholder="Reviews Gate"
                        type="string"
                        value={gate || ''}
                        required
                        onChange={(e) => setGate(e.target.value)}
                        id="validationTextarea"
                        feedbackInvalid="Gate is required"
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

               {images?.image && (
                  <CImage
                     src={images?.image}
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
   )
}

export default CreateReviewForm

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
   useLazyGetNewsByIdQuery,
   useUpdateNewsMutation,
   useCreateNewsMutation,
} from '../../../../store/admin/news/newsApi'
import { getImgUrl } from '../../../../utils/helpers/general'

const CreateNewsForm = () => {
   const navigate = useNavigate()
   const { newsId } = useParams()

   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [images, setImage] = useState({ image: null, file: null })
   const [errorPhoto, setErrorPhoto] = useState(false)
   const [validated, setValidated] = useState(false)

   const [createNews, { isLoading }] = useCreateNewsMutation()
   // eslint-disable-next-line no-unused-vars
   const [updateNews, { isUpdating }] = useUpdateNewsMutation()
   const [getNewsById, { data: news }] = useLazyGetNewsByIdQuery()

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
      if (!images.file && !title && !description) {
         setValidated(true)
      }

      const formData = new FormData()
      formData.append('title', title)
      formData.append('description', description)
      formData.append('image', images.file)

      if (!newsId) {
         try {
            await createNews(formData).unwrap()
            navigateToLogin()
         } catch (e) {
            console.error(e)
         }
      } else {
         try {
            console.log(newsId)
            await updateNews({ formData, newsId })
            navigateToLogin()
         } catch (e) {
            console.error(e)
         }
      }
   }

   // ------------effects------------------------------------
   useEffect(() => {
      if (newsId) getNewsById(newsId)
   }, [])

   useEffect(() => {
      setImage({ image: getImgUrl(news?.photoUrl) || null })
      setTitle(news?.title || '')
      setDescription(news?.description || '')
   }, [news])

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
            <CCol>Create Gate</CCol>
            <CButton onClick={() => navigate(-1)}>Go Back</CButton>
         </CCardHeader>
         <CCardBody>
            <CForm validated={validated}>
               <Flex direction="column" p="1rem 16px">
                  <CRow>
                     <CFormLabel>Title</CFormLabel>
                     <CFormInput
                        placeholder="News Title"
                        type="string"
                        value={title || ''}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        id="validationTextarea"
                        feedbackInvalid="Name is required"
                        aria-label="file example"
                     />
                  </CRow>
                  <br />
                  <CRow>
                     <CFormLabel>Description</CFormLabel>
                     <CFormInput
                        placeholder="News Description"
                        type="string"
                        value={description || ''}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        id="validationTextarea"
                        feedbackInvalid="Description is required"
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

export default CreateNewsForm

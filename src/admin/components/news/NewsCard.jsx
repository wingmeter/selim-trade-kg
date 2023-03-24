import { useState } from 'react'

import { cilPen, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
   CButton,
   CCard,
   CCardBody,
   CCardImage,
   CCardSubtitle,
   CCardTitle,
   CModal,
   CModalBody,
   CModalFooter,
   CModalHeader,
   CModalTitle,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router'

import { Flex } from '../../../client/styles/style-for-positions/style'
import { useDeleteNewsMutation } from '../../../store/admin/news/newsApi'
import { BASE_URL, ROLES } from '../../../utils/constants'
import { checkRole } from '../../../utils/helpers/general'

const NewsCard = ({ news }) => {
   console.log(news)
   const navigate = useNavigate()
   const [visible, setVisible] = useState(false)

   const [deleteGateType, { isLoading: isDeleting }] = useDeleteNewsMutation()

   const deleteGateTypeHandler = async () => {
      try {
         await deleteGateType(news?.id).unwrap()
         setVisible(false)
      } catch (error) {
         console.error(error || 'something went wrong')
      }
   }
   return (
      <>
         <CModal
            alignment="center"
            visible={visible}
            onClose={() => setVisible(false)}
         >
            <CModalHeader>
               <CModalTitle>Delete Gate Type</CModalTitle>
            </CModalHeader>
            <CModalBody>
               Are you really want to delete this gate type ? All informations
               will be removed!
            </CModalBody>
            <CModalFooter>
               <CButton
                  disabled={isDeleting}
                  color="secondary"
                  onClick={() => setVisible(false)}
               >
                  Close
               </CButton>
               <CButton
                  disabled={isDeleting}
                  color="primary"
                  onClick={deleteGateTypeHandler}
               >
                  Delete
               </CButton>
            </CModalFooter>
         </CModal>

         <CCard key={news.id}>
            <CCardImage
               src={`${BASE_URL}${news.photoUrl}`}
               width={200}
               height={400}
               style={{ objectFit: 'contain' }}
               rounded
            />
            <CCardBody>
               <CCardTitle style={{ fontSize: '24px', fontWeight: 'bold' }}>
                  {news.title}
               </CCardTitle>
               <CCardTitle className="mb-4">{news.description}</CCardTitle>
               <CCardSubtitle className="mb-2">
                  Created Date: {news.createdDate}
               </CCardSubtitle>
               <CCardSubtitle>
                  Created By: {news.createdBy?.username}
               </CCardSubtitle>
            </CCardBody>

            <Flex width="100%" justify="end" gap="20px" p="10px">
               <CButton onClick={() => navigate(`${news?.id}`)}>
                  Details
               </CButton>
               <IconButton>
                  <CIcon
                     icon={cilPen}
                     onClick={() => navigate(`${news.id}/edit`)}
                  />
               </IconButton>
               <IconButton>
                  <CIcon icon={cilTrash} onClick={() => setVisible(news.id)} />
               </IconButton>
            </Flex>
         </CCard>
      </>
   )
}

export default NewsCard

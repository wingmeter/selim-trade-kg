/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'

import { cilDelete, cilPen, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
   CContainer,
   CButton,
   CCol,
   CRow,
   CTable,
   CCard,
   CCardTitle,
   CCardHeader,
   CCardBody,
   CFormInput,
   CTableHead,
   CTableBody,
   CImage,
} from '@coreui/react'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router'

import { cardData } from '../../../client/pages/our-services/OurServicesPage'
import { Flex } from '../../../client/styles/style-for-positions/style'

const Clients = () => {
   const navigate = useNavigate()
   const [loading, setLoading] = useState(false)
   const [searchKey, setSearchKey] = useState(null)
   const [items, setItems] = useState([])
   const [dateFrom, setDateFrom] = useState(new Date().toJSON().slice(0, 10))
   const [dateTo, setDateTo] = useState(new Date().toJSON().slice(0, 10))
   const [searchFilter, setSearchFilter] = useState('true')

   const searchFor = (val) => {
      setSearchKey(val)
   }

   const deleteModal = () => {}

   return (
      <CContainer>
         <CCard>
            <CCardHeader>
               <CRow>
                  <CCol>
                     <CCardTitle>Clients</CCardTitle>
                  </CCol>
                  <CCol sm="3" className="d-flex flex-row-reverse">
                     <CRow>
                        <CButton
                           className="Loat-right"
                           color="success"
                           onClick={() => navigate('/admin/gates/create')}
                        >
                           Создать
                        </CButton>
                     </CRow>
                     <CRow />
                  </CCol>
               </CRow>
            </CCardHeader>
            <CCardBody>
               {loading ? (
                  <span>Loading...</span>
               ) : (
                  <div>
                     <CRow className="my-2" />
                     {searchFilter === 'true' && (
                        <CFormInput
                           placeholder="Поиск ..."
                           onChange={(e) => {
                              searchFor(e.target.value)
                           }}
                        />
                     )}
                     <Flex direction="column" gap="20px" p="20px 0px">
                        {cardData.map((gate) => (
                           <CCard key={gate.id}>
                              <CImage
                                 src={gate.img}
                                 width={200}
                                 height={200}
                                 rounded
                              />
                              {gate.title}
                              <span>created at: 10.10.2023</span>
                              <Flex
                                 width="100%"
                                 justify="end"
                                 gap="20px"
                                 p="10px"
                              >
                                 <IconButton>
                                    <CIcon icon={cilPen} />
                                 </IconButton>
                                 <IconButton>
                                    <CIcon icon={cilTrash} />
                                 </IconButton>
                              </Flex>
                           </CCard>
                        ))}
                     </Flex>
                  </div>
               )}
            </CCardBody>
         </CCard>
      </CContainer>
   )
}

export default Clients

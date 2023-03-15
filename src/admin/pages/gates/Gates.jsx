/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import {
   CCard,
   CCardBody,
   CCardHeader,
   CCol,
   CForm,
   CButton,
   CFormInput,
   CFormLabel,
   CFormControlWrapper,
   CTableDataCell,
   CTabPane,
   CNavLink,
   CNavItem,
   CTabContent,
   CNav,
} from '@coreui/react'

const GatesList = ({ gates }) => {
   const fields = ['id', 'name', 'description']

   return (
      <CCard>
         <CCardHeader>Gates</CCardHeader>
         <CCardBody>
            <CTableDataCell
               items={gates}
               fields={fields}
               // hover
               // striped
               // bordered
               size="sm"
               itemsPerPage={5}
               // pagination
            />
         </CCardBody>
      </CCard>
   )
}

const GatesForm = ({ onSubmit }) => {
   const [newGate, setNewGate] = useState({ name: '', description: '' })
   const handleNameChange = (event) =>
      setNewGate({ ...newGate, name: event.target.value })
   const handleDescriptionChange = (event) =>
      setNewGate({ ...newGate, description: event.target.value })

   const handleSubmit = (event) => {
      event.preventDefault()
      onSubmit(newGate)
      setNewGate({ name: '', description: '' })
   }

   return (
      <CCard>
         <CCardHeader>Add Gate</CCardHeader>
         <CCardBody>
            <CForm onSubmit={handleSubmit}>
               <CFormControlWrapper>
                  <CFormLabel htmlFor="name">Name</CFormLabel>
                  <CFormInput
                     id="name"
                     value={newGate.name}
                     onChange={handleNameChange}
                     required
                  />
               </CFormControlWrapper>
               <CFormControlWrapper>
                  <CFormLabel htmlFor="description">Description</CFormLabel>
                  <CFormInput
                     id="description"
                     value={newGate.description}
                     onChange={handleDescriptionChange}
                     required
                  />
               </CFormControlWrapper>
               <CButton type="submit" color="primary">
                  Add Gate
               </CButton>
            </CForm>
         </CCardBody>
      </CCard>
   )
}

const Gates = () => {
   const [activeTab, setActiveTab] = useState('list')
   const [gates, setGates] = useState([
      { id: 1, name: 'Gate A', description: 'This is Gate A.' },
      { id: 2, name: 'Gate B', description: 'This is Gate B.' },
   ])

   const handleAddGate = (newGate) => {
      setGates([...gates, { id: gates.length + 1, ...newGate }])
   }

   return (
      <CCol>
         <CTabContent activeTab={activeTab}>
            <CNav
               component="nav"
               variant="pills"
               className="flex-column flex-sm-row"
            >
               <CNavItem>
                  <CNavLink onClick={() => setActiveTab('list')}>
                     Gates List
                  </CNavLink>
               </CNavItem>
               <CNavItem>
                  <CNavLink onClick={() => setActiveTab('create')}>
                     Create Gate
                  </CNavLink>
               </CNavItem>
            </CNav>
            <CTabContent>
               <CTabPane data-tab="list">
                  {/* {activeTab === 'list' && */}
                  {/* <GatesList gates={gates} /> */}
                  {/* } */}
               </CTabPane>
               <CTabPane data-tab="create">
                  {/* {activeTab === 'create' && ( */}
                  <GatesForm onSubmit={handleAddGate} />
                  {/* )} */}
               </CTabPane>
            </CTabContent>
         </CTabContent>
      </CCol>
   )
}

export default Gates

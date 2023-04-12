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
   CFormSelect,
   CRow,
} from '@coreui/react'
import { useLocation, useNavigate, useParams } from 'react-router'
// eslint-disable-next-line no-unused-vars
import { useSearchParams } from 'react-router-dom'

import { Flex } from '../../../client/styles/style-for-positions/style'
import {
   useGetAllGateTypesQuery,
   useGetGateTypeByIdQuery,
} from '../../../store/admin/gate-types/gateTypesApi'
import {
   useCreateOrderInProgressMutation,
   useUpdateOrderInProgressMutation,
   useLazyGetOrderInProgressByIdQuery,
   useLazyGetOrderByIdQuery,
} from '../../../store/admin/order/orderApi'

const CreateOrderInProgressForm = () => {
   const navigate = useNavigate()
   const { orderId } = useParams()
   const location = useLocation()

   const locationInfo = location.pathname.split('/')[4]

   const { data: gateTypes } = useGetAllGateTypesQuery({
      pageNo: 0,
      size: 20,
   })

   const [gateTypesSelected, setGateTypesSelected] = useState(
      gateTypes?.content[0]?.id
   )

   const { data: gates } = useGetGateTypeByIdQuery(gateTypesSelected || 1)

   const [gatesSelected, setGatesSelected] = useState(
      gates?.gateList[0]?.id || 0
   )

   const [name, setName] = useState('')
   const [phoneNumber, setPhoneNumber] = useState('')
   const [validated, setValidated] = useState(false)

   const [status, setStatus] = useState()

   const handleGatesChange = (event) => {
      setGatesSelected(event.target.value)
   }

   const handleGateTypesChange = (event) => {
      setGateTypesSelected(event.target.value)
   }

   const [createOrderInProress, { isLoading }] =
      useCreateOrderInProgressMutation()
   // eslint-disable-next-line no-unused-vars
   const [updateOrderInProress, { isUpdating }] =
      useUpdateOrderInProgressMutation()
   const [getOrderById, { data: order }] = useLazyGetOrderByIdQuery()
   const [getOrderInProgressById] = useLazyGetOrderInProgressByIdQuery()

   const navigateToLogin = () => {
      navigate(-1)
   }

   const submitHandler = async () => {
      if (!name && !phoneNumber && !gatesSelected && !gateTypesSelected) {
         setValidated(true)
      }
      const data = {
         name,
         phoneNumber,
         gateTypeId: Number(gateTypesSelected),
         gateId: Number(gatesSelected),
      }

      const updateData = {
         name,
         phoneNumber,
         gateTypeId: Number(gateTypesSelected),
         gateId: Number(gatesSelected),
         status,
      }

      if (locationInfo === 'create') {
         try {
            await createOrderInProress({ data, orderId })
            navigateToLogin()
         } catch (e) {
            console.error(e)
         }
      } else {
         try {
            await updateOrderInProress({ data: updateData, orderId })
            navigateToLogin()
         } catch (e) {
            console.error(e)
         }
      }
   }

   const renderList = (option) => {
      if (!option) {
         return 0
      }
      return option?.map((data) => ({
         label: data.name,
         value: data.id,
      }))
   }

   // ------------effects------------------------------------
   useEffect(() => {
      if (orderId)
         getOrderById(orderId)
            .unwrap()
            .catch((data) => {
               if (data.status === 404) {
                  getOrderInProgressById(orderId)
                     .unwrap()
                     .then((data) => {
                        setName(data?.name)
                        setPhoneNumber(data?.phoneNumber)
                        setGateTypesSelected(data?.gateType?.id)
                        setGatesSelected(data?.gate?.id)
                        setStatus(data?.status)
                     })
               }
            })
   }, [])

   useEffect(() => {
      setName(order?.name)
      setPhoneNumber(order?.phoneNumber)
   }, [order])

   return (
      <CCard>
         <CCardHeader className="d-flex flex-row align-items-center">
            <CCol>Create Order In Progress</CCol>
            <CButton onClick={() => navigate(-1)}>Go Back</CButton>
         </CCardHeader>
         <CCardBody>
            <CForm validated={validated}>
               <Flex direction="column" p="1rem 16px">
                  <CRow>
                     <CFormLabel>Имя покупателя</CFormLabel>
                     <CFormInput
                        placeholder="Имя"
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
                     <CFormLabel>Номер телефона</CFormLabel>
                     <CFormInput
                        placeholder="Номер телефона"
                        type="number"
                        value={Number(phoneNumber) || ''}
                        required
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        id="validationTextarea"
                        feedbackInvalid="Description is required"
                        aria-label="file example"
                     />
                  </CRow>
                  <br />
                  <CRow>
                     <CFormLabel>Типы ворот</CFormLabel>
                     <CFormSelect
                        aria-label="Default select example"
                        options={renderList(gateTypes?.content)}
                        onChange={handleGateTypesChange}
                        value={gateTypesSelected}
                     />
                  </CRow>
                  <br />
                  <CRow>
                     <CFormLabel>Ворота</CFormLabel>
                     <CFormSelect
                        aria-label="Default select example"
                        options={renderList(gates?.gateList)}
                        onChange={handleGatesChange}
                        value={gatesSelected}
                     />
                  </CRow>
                  <br />
               </Flex>
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

export default CreateOrderInProgressForm

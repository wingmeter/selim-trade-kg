import { AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify'
import styled from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'
import { Flex } from '../../../../client/styles/style-for-positions/style'
import { Text, Title } from '../../../../client/styles/typography/style'

export const showSuccessMessage = (msg) => {
   toast.success(
      <Flex direction="column" gap="7px" justify="center" align="center">
         <AiOutlineCheckCircle size={20} color="#5932EA" />
         {msg.title && (
            <Title size="17px" secondary weight="600">
               {msg.title}
            </Title>
         )}
         <Text style={{ textAlign: 'center' }} secondary>
            {msg.message}
         </Text>
      </Flex>
   )
}

export const showErrorMessage = (msg) =>
   toast.error(
      <Flex direction="column" gap="7px" justify="center" align="center">
         <AiOutlineWarning size={20} color="#e24c43" />
         {msg.title && (
            <Title size="17px" secondary weight="600">
               {msg.title}
            </Title>
         )}
         <Text style={{ textAlign: 'center' }} color="#5f2120">
            {msg.message}
         </Text>
      </Flex>
   )
const Notification = () => {
   return (
      <StyledToastContainer
         autoClose={3000}
         position="top-right"
         hideProgressBar
      />
   )
}

const StyledToastContainer = styled(ToastContainer)`
   width: 412px;
   @media (max-width: 430px) {
      max-width: 612px;
      width: 100%;
      padding: 1rem;
   }

   .Toastify__toast--success {
      background: #ffffff;
      border-radius: 15px;
      box-shadow: 10px 10px 30px rgba(181, 208, 192, 0.5);
      width: 100%;
      @media (max-width: 430px) {
         margin-bottom: 10px !important;
      }
   }

   .Toastify__toast--error {
      background: #fdeded;
      border-radius: 15px;
      box-shadow: 10px 10px 30px rgba(214, 194, 194, 0.5);
      width: 100%;
      @media (max-width: 430px) {
         margin-bottom: 10px !important;
      }
   }
   .Toastify__toast-body {
      display: block !important;
   }
   .Toastify__close-button--light {
      display: none;
   }
   .Toastify__toast-icon {
      width: 0;
      height: 0;
   }
   .Toastify__progress-bar--success {
      background: #21262b;
   }
`

export default Notification

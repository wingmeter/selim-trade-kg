import { Dialog } from '@mui/material'
import styled from 'styled-components'

import { ReactComponent as CloseIcon } from '../../../assets/icons/closeIcon.svg'
import backgroundImage from '../../../assets/images/backgroundImage.png'
import completedImg from '../../../assets/images/completedImg.png'
import { Flex } from '../../../styles/style-for-positions/style'

const Modal = ({ open, onClose, children, succes }) => {
   return (
      <StyledDialog
         open={open}
         onClose={onClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
      >
         <Flex width="100%" justify="end">
            <CloseIcon onClick={onClose} size={25} cursor="pointer" />
         </Flex>
         {succes && (
            <Flex align="center" justify="center" margin="10px auto 42px">
               <img src={completedImg} alt="completeimg" />
            </Flex>
         )}
         {children}
      </StyledDialog>
   )
}
const StyledDialog = styled(Dialog)`
   .MuiPaper-root {
      box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
      border-radius: 30px;
      padding: 1.4rem;
      overflow: visible;
      max-width: 1000px;
      background-image: url(${backgroundImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
   }
`

export default Modal

import MuiButton from '@mui/material/Button'
import styled from 'styled-components'

import { ReactComponent as ArrowUp } from '../../../assets/icons/arrowUp.svg'

export const ButtonCircle = ({ fullWidth, isMobile, ...props }) => {
   const scrollTopHandler = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }
   return (
      <ButtonWrapper>
         <StyledButton
            size={isMobile ? 'small' : 'medium'}
            fullWidth={fullWidth}
            onClick={scrollTopHandler}
            {...props}
         >
            <ArrowUp />
         </StyledButton>
      </ButtonWrapper>
   )
}

const ButtonWrapper = styled.div`
   padding: 1rem;
   background: transparent;
   border-radius: 50%;
   position: absolute;
   right: 0;
   bottom: -45px;
   transition: transform 0.2s ease-out;
   transform: scale(1);
   &:hover {
      opacity: 0.8;
      transition: transform 0.2s ease-out;
      transform: scale(1.2);
      animation-name: ANIM;
      animation-duration: 1s;
      animation-iteration-count: infinite;
   }

   @keyframes ANIM {
      0% {
         transform: translateY(-0rem);
      }
      30% {
         transform: translateY(-1.5rem);
      }
      50% {
         transform: translateY(-1rem);
      }
      100% {
         transform: translateY(0rem);
      }
   }
`
const StyledButton = styled(MuiButton)`
   width: 80px;
   height: 80px;
   padding: 0.5rem;
   border-radius: 50% !important;
   background: linear-gradient(90.13deg, #105bfb 0.1%, #5061ff 134.04%);

   &.MuiButton-contained {
      &:hover {
         box-shadow: none;
         background-color: #3772ff !important;
         transition: transform 0.2s ease-out !important;
         transform: scale(0.1);
      }
      &:active {
         box-shadow: none;
         background: #6190ff;
      }
      &:disabled {
         background-color: #1f6ed466;
         color: #ffffff;
      }
   }
`

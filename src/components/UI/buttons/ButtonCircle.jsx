import { styled } from '@mui/material'
import MuiButton from '@mui/material/Button'

import { ReactComponent as ArrowUp } from '../../../assets/icons/arrowUp.svg'

export const ButtonCircle = ({ fullWidth, isMobile, ...props }) => {
   const scrollTopHandler = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }
   return (
      <StyledButton
         size={isMobile ? 'small' : 'medium'}
         fullWidth={fullWidth}
         onClick={scrollTopHandler}
         {...props}
      >
         <ArrowUp />
      </StyledButton>
   )
}

const StyledButton = styled(MuiButton)`
   width: 80px;
   height: 80px;
   padding: 0.5rem;
   border-radius: 50%;
   background: linear-gradient(90.13deg, #105bfb 0.1%, #5061ff 134.04%);
   position: absolute;
   right: 0;
   bottom: -25px;
   transition: transform 0.2s ease-out;
   transform: scale(1);

   &:hover {
      background-color: #5061ff;
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

   &.MuiButton-contained {
      &:hover {
         box-shadow: none;
         background-color: #3772ff !important;
         transition: transform 0.2s ease-out;
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

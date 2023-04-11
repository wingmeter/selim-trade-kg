import { useEffect, useState } from 'react'

import MuiButton from '@mui/material/Button'
import styled from 'styled-components'

import { ReactComponent as ArrowUp } from '../../../assets/icons/arrowUp.svg'

export const ButtonCircle = ({ fullWidth, isMobile, ...props }) => {
   const [visible, setVisible] = useState(false)

   useEffect(() => {
      function handleScroll() {
         if (window.pageYOffset > 100) {
            setVisible(true)
         } else {
            setVisible(false)
         }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   const scrollTopHandler = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }
   return (
      <ButtonWrapper>
         <StyledButton
            className={`scroll-up-button ${visible ? 'visible' : ''}`}
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
   .scroll-up-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: none;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      z-index: 99;
   }

   .scroll-up-button.visible {
      display: block;
   }
   &:hover {
      transition: transform 0.2s ease-out;
      transition: all 2s ease-in-out;
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

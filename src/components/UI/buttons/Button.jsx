import { forwardRef } from 'react'

import { styled } from '@mui/material'
import MuiButton from '@mui/material/Button'

export const Button = forwardRef(
   ({ children, fullWidth, isMobile, ...props }, ref) => {
      return (
         <StyledButton
            size={isMobile ? 'small' : 'medium'}
            ref={ref}
            fullWidth={fullWidth}
            {...props}
         >
            {children}
         </StyledButton>
      )
   }
)

const StyledButton = styled(MuiButton)`
   width: ${({ width }) => width || ''};
   padding: ${({ padding }) => padding || '0.5em 4rem'};
   box-sizing: border-box;
   box-shadow: none;
   border-radius: 20px;
   font-family: var(--base-font);
   font-weight: 900;
   font-size: ${({ size }) => size || '25px'};
   font-weight: 500;
   text-transform: lowercase;
   color: #f8f8f8;
   max-width: 100% !important;
   white-space: nowrap !important;
   min-width: 0px;
   background: linear-gradient(90.13deg, #105bfb 0.1%, #5061ff 134.04%);
   :hover {
      background-color: #5061ff;
      opacity: 0.8;
   }
   &.MuiButton-contained {
      &:hover {
         box-shadow: none;
         background-color: #3772ff !important;
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
   &.MuiButton-outlined {
      border: 1px solid;
      color: #5061ff;
      background-color: transparent;
      &:hover {
         box-shadow: none;
         background: rgba(29 96 255 0.1);
      }
      &:active {
         box-shadow: none;
         background: rgba(97 144 255 0.3);
      }
   }
`

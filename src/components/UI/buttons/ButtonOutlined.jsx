import { forwardRef } from 'react'

import { styled } from '@mui/material'
import MuiButton from '@mui/material/Button'

export const ButtonOutlined = forwardRef(
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
   border-radius: ${({ bradius }) => bradius || '18.0838px'};
   align-items: center;
   font-family: ${({ secondary }) =>
      secondary ? 'var(--base-font)' : 'var(--second-font)'};
   font-size: ${({ size }) => size || '22.6048px'};
   font-weight: ${({ secondary }) => (secondary ? '300' : '400')};
   padding: ${({ padding }) => padding || '15px 20px'};
   color: ${({ secondary }) => (secondary ? '#001645' : 'var(--title-color)')};
   background: transparent;
   max-width: 100% !important;
   white-space: nowrap !important;
   border: ${({ secondary }) =>
      secondary ? '1px solid #001645' : '0.9px solid #105bfb'};

   text-transform: lowercase;

   :hover {
      background-color: var(--text-color);
   }
`

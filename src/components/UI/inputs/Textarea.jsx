import { forwardRef } from 'react'

import { styled, TextareaAutosize } from '@mui/material'

export const Textarea = forwardRef(
   ({ error, isPassword, isMobile, ...other }, ref) => {
      return (
         <StyledTextarea
            size={isMobile ? 'small' : 'medium'}
            ref={ref}
            error={Boolean(error)}
            {...other}
            aria-label="minimum height"
            endAdornment={null}
            minRows={3}
            style={{
               padding: '15px 10px',
               fontFamily: 'var(--base-font)',
               width: '100%',
               borderRadius: '20px',
            }}
         />
      )
   }
)

const StyledTextarea = styled(TextareaAutosize)`
   outline: none;
   resize: none;
   &:focus {
      border-color: var(--title-color);
   }

   &:hover {
      border-color: #184bcc;
   }
`

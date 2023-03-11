import { forwardRef } from 'react'

import { styled, TextareaAutosize } from '@mui/material'
import { useMediaQuery } from 'react-responsive'

import { DeviceSize } from '../../../../utils/constants'

export const Textarea = forwardRef(({ error, isPassword, ...other }, ref) => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

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
            border: error ? '1px solid red' : '',
         }}
      />
   )
})

const StyledTextarea = styled(TextareaAutosize)`
   outline: none;
   resize: none;
   color: #414141;
   border-color: #a29898d0;
   font-size: var(--base-font);
   font-size: 20px;
   font-weight: 500;
   &::placeholder {
      color: #a29898d0;
      font-size: 20px;
      font-weight: 500;
   }
   &:focus {
      border-color: var(--title-color);
   }

   &:hover {
      border-color: var(--title-color);
   }
`

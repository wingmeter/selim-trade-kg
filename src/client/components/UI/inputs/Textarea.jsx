import { forwardRef } from 'react'

import { styled, TextareaAutosize } from '@mui/material'
import { useMediaQuery } from 'react-responsive'

import { DeviceSize } from '../../../../utils/constants'

export const Textarea = forwardRef(({ error, isPassword, ...other }, ref) => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   return (
      <>
         <StyledTextarea
            size={isMobile ? 'small' : 'medium'}
            ref={ref}
            error={error}
            {...other}
            aria-label="minimum height"
            minRows={3}
            style={{
               padding: '15px 10px',
               fontFamily: 'var(--base-font)',
               width: '100%',
               borderRadius: '20px',
               border: error ? '1px solid red' : '',
            }}
         />
         {error && <ErrorTextMessage>Это поле объязательное</ErrorTextMessage>}
      </>
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
const ErrorTextMessage = styled('p')`
   font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
   font-weight: 400;
   font-size: 0.75rem;
   line-height: 1.66;
   letter-spacing: 0.03333em;
   text-align: left;
   margin-top: -35px;
   margin-right: 14px;
   margin-bottom: 0;
   margin-left: 14px;
   color: #d32f2f;

   @media (max-width: 769px) {
      margin-top: -12px;
   }
`

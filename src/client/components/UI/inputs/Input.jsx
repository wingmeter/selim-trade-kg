import { forwardRef } from 'react'

import { styled, TextField } from '@mui/material'
import { useMediaQuery } from 'react-responsive'

import { DeviceSize } from '../../../../utils/constants'

export const Input = forwardRef(({ error, isPassword, ...other }, ref) => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   return (
      <StyledInput
         size={isMobile ? 'small' : 'medium'}
         ref={ref}
         error={Boolean(error)}
         {...other}
         inputProps={{
            style: {
               padding: '10px',
               fontFamily: 'var(--base-font)',
            },
         }}
      />
   )
})

const StyledInput = styled(TextField)`
   &.MuiFormControl-root {
      width: ${({ width }) => width || '100%'};
   }
   .MuiInputBase-formControl {
      min-width: 100px;
      border-radius: 20px;

      .MuiInputBase-input {
         font-family: var(--base-font) !important;
      }
   }
   & .MuiInputBase-input {
      font-family: 'Montserrat' !important;
      font-weight: 500;
      font-size: 20px;
      letter-spacing: 0.5px;
      text-transform: lowercase;
      color: #414141;
   }
   & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
         border-color: #002cefc3;
         border: 1px solid;
      }
   }
   & .MuiInputBase-root {
      font-size: ${({ size }) => (size === 'small' ? '0.875rem' : '1rem')};
   }
`

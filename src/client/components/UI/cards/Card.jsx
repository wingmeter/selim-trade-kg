import { forwardRef } from 'react'

import styled from 'styled-components'

const Card = forwardRef(({ children, ...other }, ref) => {
   return (
      <CardStyled ref={ref} {...other}>
         {children}
      </CardStyled>
   )
})

const CardStyled = styled.div`
   background-color: ${({ bg }) => bg || '#FFFFFF;'};
   background-image: url(${({ img }) => img || ''});
   background-size: cover;
   object-fit: cover;
   object-position: top center;
   background-repeat: no-repeat;
   border-radius: ${({ bRadius }) => bRadius || '20px'};
   padding: ${({ padding }) => padding || '20px 25px'};
   max-width: ${({ maxW }) => maxW || '1300px'};
   width: ${({ width }) => width || '100% !important'};
   height: ${({ height }) => height || ''};
   box-shadow: 0 0.125rem 0.5rem #1e4a7e26;
   transition: transform 0.15s ease-in-out;
   position: relative;
   @media (max-width: 720px) {
      width: 100%;
      padding: 20px;
      border-radius: 12px;
   }
`

export default Card

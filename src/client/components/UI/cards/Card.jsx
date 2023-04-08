import { forwardRef } from 'react'

import styled from 'styled-components'

import LazyLoad from '../lazy-loading/LazyLoading'

const Card = forwardRef(({ children, ...other }, ref) => {
   return (
      <CardStyled ref={ref} {...other}>
         {other.img && <CardImage src={other.img} />}
         {children}
      </CardStyled>
   )
})

const CardStyled = styled.div`
   position: relative;
   overflow: ${({ img }) => (img ? 'hidden' : 'visible')};
   background-color: ${({ bg }) => bg || '#FDFDFD'};
   border-radius: ${({ bRadius }) => bRadius || '20px'};
   padding: ${({ padding }) => padding || '20px 25px'};
   max-width: ${({ maxW }) => maxW || '1300px'};
   width: ${({ width }) => width || '100% !important'};
   height: ${({ height }) => height || ''};
   box-shadow: 0 0.125rem 0.5rem #1e4a7e26;
   transition: transform 0.15s ease-in-out;
   @media (max-width: 720px) {
      width: 100%;
      padding: 20px;
      border-radius: 12px;
   }
`
const CardImage = styled(LazyLoad)`
   width: 100%;
   height: 100%;
   object-fit: cover;
   position: absolute;
   top: 0;
   left: 0;
`

export default Card

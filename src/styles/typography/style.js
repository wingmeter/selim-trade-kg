/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

export const Title = styled.h1`
   font-family: var(--base-font);
   color: ${({ white, color }) => {
      if (color) {
         return color
      }
      if (white) {
         return '#fcfcfc'
      }
      return '#414141'
   }};

   font-size: ${({ size }) => size || '20px'};
   letter-spacing: -0.01rem;
   font-weight: ${({ weight }) => weight || '700'};
   text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'auto')};
   text-align: ${({ align }) => align || 'left'};
   max-width: ${({ mWidth }) => mWidth || ''};
   display: flex;
   align-items: center;
   gap: 6px;
   margin: ${({ m }) => m || ''};
`
export const Text = styled.p`
   color: ${({ white, color }) => {
      if (color) {
         return color
      }
      if (white) {
         return '#fcfcfc'
      }
      return '#545454'
   }};
   font-size: ${({ size }) => size || '14px'};
   line-height: 22px;
   letter-spacing: -0.01em;
   font-weight: ${({ weight }) => weight || '400'};
   text-align: ${({ align }) => align || 'justify'};
   line-height: 160%;
   display: flex;
   align-items: center;

   gap: 6px;
   margin: ${({ m }) => m || ''};
`

import styled from 'styled-components'

export const Flex = styled.div`
   width: ${(props) => props.width || ''};
   display: flex;
   flex-direction: ${(props) => `${props.direction} !important` || 'row'};
   align-items: ${(props) => `${props.align} !important` || 'stretch'};
   justify-content: ${(props) => `${props.justify} !important` || 'stretch'};
   flex-wrap: ${(props) => `${props.wrap} !important` || 'nowrap'};
   gap: ${(props) => `${props.gap} !important` || '0px'};
   margin: ${({ margin }) => `${margin} !important` || '0'};
   height: ${({ height }) => `${height} !important` || ''};
   max-width: ${({ maxWidth }) => maxWidth || ''};
   min-width: ${({ minWidth }) => minWidth || ''};
   padding: ${({ p }) => `${p} !important` || ''};

   ::after {
      display: none !important;
   }
`
export const Grid = styled.div`
   width: ${(props) => props.width || ''};
   display: grid;
   grid-template-columns: ${(props) => props.columns || '0fr'};
   align-items: ${(props) => props.align || 'stretch'};
   justify-content: ${(props) => props.justify || 'start'};
   grid-template-rows: ${(props) => props.rows || '0fr'};
   gap: ${(props) => props.gap || '0px'};
   margin: ${({ margin }) => margin || '0'};
   grid-column-gap: ${({ columnGap }) => columnGap || '0'};
   grid-row-gap: ${({ rowGap }) => rowGap || '0'};
`

export const Centered = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 20;
`

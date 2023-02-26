import React from 'react'

import { Container } from '@mui/material'
import styled from 'styled-components'

import secondBg from '../../../assets/images/secondBG.png'
import { SubTitle } from '../style'

const SecondSection = () => {
   return (
      <StyledSecondSection>
         <Container>
            <SubTitle>Кто такие Selim trade?</SubTitle>
            <Box>
               <p>
                  МЫ являемся официальным представителем DOORHAN.
                  <br />
                  Производственно — монтажная компания Selim trade основана в
                  2003 году.
                  <br />
                  Основа нашей деятельности — это продажа и монтаж: ворот,
                  рольставней, шлагбаумов, рол штор, жалюзи и многое другое.
               </p>
            </Box>
         </Container>
      </StyledSecondSection>
   )
}

export default SecondSection

const StyledSecondSection = styled.section`
   padding-top: 160px;
   background-image: url(${secondBg});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   height: 810px;

   @media screen and (max-width: 769px) {
      padding-top: 30px;
      height: 310px;
   }

   .MuiContainer-root {
      @media (min-width: 1200px) {
         max-width: 1400px;
      }
   }
`

const Box = styled.div`
   background: #ffffff;
   box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
   border-radius: 10px;
   padding: 10px 16px;

   margin-top: 20px;
   width: 533px;

   @media screen and (max-width: 769px) {
      width: 308px;
      height: 200px;
   }

   p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 140%;
      color: #414141;

      @media screen and (max-width: 769px) {
         font-size: 14px;
      }
   }
`

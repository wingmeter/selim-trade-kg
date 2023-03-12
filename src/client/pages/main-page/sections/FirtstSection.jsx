import { Container } from '@mui/material'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { DeviceSize } from '../../../../utils/constants'
import { ReactComponent as VorotaIcon } from '../../../assets/icons/Vorota.svg'
import bg from '../../../assets/images/bg1.png'
import { Button } from '../../../components/UI/buttons/Button'
import CircleText from '../../../components/UI/CircleText'

const FirtstSection = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   return (
      <FirstSection>
         <Container>
            <Title>
               Современная <br /> и надёжная защита
            </Title>
            <SubTitle>
               Найдите идеальный вариант сами <br /> или предоставьте это нам
            </SubTitle>
            <Button startIcon={<VorotaIcon />}>заказать ворота</Button>
            {!isMobile && (
               <BottomCircle>
                  <CircleText text="CКРОЛЛ • CКРОЛЛ • CКРОЛЛ • CКРОЛЛ • CКРОЛЛ • CКРОЛЛ •" />
               </BottomCircle>
            )}
         </Container>
      </FirstSection>
   )
}

export default FirtstSection

const FirstSection = styled.section`
   padding-top: 150px;
   background-image: url(${bg});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   height: 770px;

   @media screen and (max-width: 769px) {
      height: 390px;
   }

   .MuiContainer-root {
      @media (min-width: 1200px) {
         max-width: 1400px;
      }
   }
`

const SubTitle = styled.p`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 25px;
   color: #fcfcfc;
   margin-bottom: 40px;
   margin-top: 12px;

   @media screen and (max-width: 769px) {
      font-size: 16px;
      margin-top: 6px;
      margin-bottom: 25px;
   }
`

const Title = styled.h1`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 80px;
   text-transform: uppercase;
   color: #fcfcfc;
   line-height: 110%;
   margin-bottom: 12px;

   @media screen and (max-width: 769px) {
      font-size: 25px;
   }
`
const BottomCircle = styled.div``

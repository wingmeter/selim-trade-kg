import { Container } from '@mui/material'
import styled from 'styled-components'

import leaf from '../../../assets/images/leaf.png'
import microBG from '../../../assets/images/microBG.png'
import { ButtonOutlined } from '../../../components/UI/buttons/ButtonOutlined'
import Card from '../../../components/UI/cards/Card'
import { SubTitle } from '../style'

const cardData = [
   {
      id: 1,
      title: 'РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH',
      img: microBG,
   },
   {
      id: 2,
      title: 'РАСШИРЕНИЕ ДИЗАЙНА ВОРОТ СТАДНАРТНОЙ СЕРИИ RSD01SC BIW',
      img: microBG,
   },
   {
      id: 3,
      title: 'СНИЖЕНИЕ ЦЕН НА ОСНОВНУЮ ЛИНЕЙКУ АВТОМАТИКИ DOORHAN',
      img: microBG,
   },
]

const FifthSection = () => {
   return (
      <StyledSection>
         <Container>
            <StyledSubTitle>Последние новости</StyledSubTitle>
            <CardContainer>
               {cardData.map((data) => (
                  <StyledCard img={data.img}>
                     <StyledTitle>{data.title}</StyledTitle>
                  </StyledCard>
               ))}
            </CardContainer>
            <StyledButtonOutlined>смотреть все</StyledButtonOutlined>
         </Container>
      </StyledSection>
   )
}

export default FifthSection

const StyledSection = styled.section`
   background-position: right bottom -100%;
   background-image: url(${leaf});
   background-repeat: no-repeat;
   height: 600px;
   @media screen and (max-width: 769px) {
      padding-top: 50px;
      height: 350px;
   }

   .MuiContainer-root {
      @media (min-width: 1200px) {
         max-width: 1400px;
      }
   }
`
const StyledSubTitle = styled(SubTitle)`
   text-align: center;
   margin-bottom: 35px;
`
const CardContainer = styled.div`
   display: flex;
   gap: 20px;

   @media screen and (max-width: 769px) {
      overflow: hidden;
      overflow-x: scroll;
   }
`
const StyledCard = styled(Card)`
   text-align: center;
   padding: 90px 28px;

   @media screen and (max-width: 769px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 160px;
      padding: 70px;
   }
`
const StyledTitle = styled.p`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 800;
   font-size: 20px;
   color: #f1f6ff;
   @media screen and (max-width: 769px) {
      font-size: 10px;
   }
`

const StyledButtonOutlined = styled(ButtonOutlined)`
   display: flex !important;
   margin: 20px auto !important;
   @media screen and (max-width: 768px) {
      font-size: 12px !important;
   }
`

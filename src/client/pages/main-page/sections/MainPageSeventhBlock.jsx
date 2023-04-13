import { Container } from '@mui/material'
import styled from 'styled-components'

import serviceWork from '../../../assets/images/call.png'
import serviceWork2 from '../../../assets/images/communication.png'
import serviceWork5 from '../../../assets/images/fix.png'
import FourBG from '../../../assets/images/FourBG.png'
import serviceWork3 from '../../../assets/images/montage.png'
import Card from '../../../components/UI/cards/Card'
import LazyImage from '../../../components/UI/lazy-loading/LazyLoading'
import { SubTitle } from '../style'

const cardData = [
   {
      id: 1,
      title: 'Консультация и техническая поддержка',
      img: serviceWork,
   },
   {
      id: 2,
      title: 'Настройка пультов управления',
      img: serviceWork2,
   },
   {
      id: 3,
      title: 'Монтаж',
      img: serviceWork3,
   },
   {
      id: 5,
      title: 'Послегарантийное обслуживание',
      img: serviceWork5,
   },
]

const SeventhSection = () => {
   return (
      <StyledSection>
         <Container>
            <StyledSubTitle>Сервис</StyledSubTitle>
            <CardContainer>
               {cardData.map((data) => (
                  <StyledCard key={data.id}>
                     <LazyImage src={data.img} alt={data.title} />
                     <p>{data.title}</p>
                  </StyledCard>
               ))}
            </CardContainer>
         </Container>
      </StyledSection>
   )
}

export default SeventhSection

const StyledSection = styled.section`
   background-image: url(${FourBG});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   height: 480px;

   @media screen and (max-width: 769px) {
      padding-top: 50px;
      height: 380px;
   }

   .MuiContainer-root {
      @media (min-width: 1200px) {
         max-width: 1400px;
      }
   }
`
const StyledSubTitle = styled(SubTitle)`
   text-align: center;
   margin-top: 50px;
   margin-bottom: 60px;

   @media screen and (max-width: 769px) {
      margin-top: 60px;
      margin-bottom: 30px;
   }
`
const CardContainer = styled.div`
   display: flex;
   gap: 20px;

   @media screen and (max-width: 769px) {
      overflow: hidden;
      padding: 15px 5px;
      overflow-x: scroll;
   }
`
const StyledCard = styled(Card)`
   text-align: center;

   @media screen and (max-width: 769px) {
      display: flex;
      padding: 90px 28px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 130px;
   }
   img {
      @media screen and (max-width: 769px) {
         width: 50px;
         height: 50px;
      }
   }
   p {
      @media screen and (max-width: 769px) {
         font-size: 14px;
      }
   }
`

import { Container } from '@mui/material'
import styled from 'styled-components'

import FourBG from '../../../assets/images/FourBG.png'
import serviceWork from '../../../assets/images/serviceWork.png'
import serviceWork2 from '../../../assets/images/serviceWork2.png'
import serviceWork3 from '../../../assets/images/serviceWork3.png'
import serviceWork5 from '../../../assets/images/serviceWork5.png'
import Card from '../../../components/UI/cards/Card'
import { SubTitle } from '../style'

const cardData = [
   {
      id: 1,
      title: 'Бесплатный выезд специалиста для замеров',
      img: serviceWork,
   },
   {
      id: 2,
      title: 'Многолетний опыт работы',
      img: serviceWork2,
   },
   {
      id: 3,
      title: 'Минимальные сроки производства',
      img: serviceWork3,
   },
   {
      id: 4,
      title: 'Высокая квалификация сотрудиков',
      img: serviceWork3,
   },
   {
      id: 5,
      title: 'Постгарантийное обслуживание и ремонт',
      img: serviceWork5,
   },
]

const FourthSection = () => {
   return (
      <StyledSection>
         <Container>
            <StyledSubTitle>Наши преимущества</StyledSubTitle>
            <CardContainer>
               {cardData.map((data) => (
                  <StyledCard>
                     <img src={data.img} alt={data.title} />
                     <p>{data.title}</p>
                  </StyledCard>
               ))}
            </CardContainer>
         </Container>
      </StyledSection>
   )
}

export default FourthSection

const StyledSection = styled.section`
   background-image: url(${FourBG});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   height: 420px;

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
   margin-top: 120px;
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

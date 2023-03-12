/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import { DeviceSize } from '../../../../utils/constants'
import img from '../../../assets/images/img.png'
import Advantages from '../../../components/our-services/Advantages'
import Card from '../../../components/UI/cards/Card'
import { Flex } from '../../../styles/style-for-positions/style'
import { Text, Title } from '../../../styles/typography/style'
import { cardData } from '../OurServicesPage'

const ServicesInnerPage = ({ title, image, description }) => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   const navigate = useNavigate()

   const showInnerPage = () => navigate(`/`)
   return (
      <Container>
         <ServiceBackground>
            <HeaderBanner banner={image || img}>
               <Title white size={isMobile ? '16px' : '70px'} uppercase>
                  {title || 'Промышленные секционные ворота'}
               </Title>
            </HeaderBanner>
         </ServiceBackground>

         <ServiceDescription>
            <Text
               size={isMobile ? '14px' : '19px'}
               weight="300"
               align={isMobile && 'center'}
            >
               {description ||
                  'Наши сотрудники прошли сертифицированные тренинги в Учебных центрах ГК DoorHan в г. Москва, г. Алматы, г. Астаны  а так же успешно сдали экзамены и являются обладателями сертификатов по направлениям Воротные системы, ролл ставни, ролл  ворота, автоматические системы, Монтаж автоматики'}
            </Text>
         </ServiceDescription>
         <TypeOfItems>
            <Title size={isMobile ? '16px' : '40px'} uppercase>
               типы ворот
            </Title>
            <CardContainer>
               {cardData.map((card) => (
                  <StyledCard
                     key={card.id}
                     img={card?.img}
                     onClck={() => showInnerPage(card.id)}
                  >
                     <CardSubTitle>
                        <Title white>{card?.title}</Title>
                     </CardSubTitle>
                  </StyledCard>
               ))}
            </CardContainer>
         </TypeOfItems>
         <Advantages />
      </Container>
   )
}

export default ServicesInnerPage

const ServiceBackground = styled(Flex)`
   width: 100%;
   max-width: 100%;
   background-image: url(${img});
   background-repeat: no-repeat;
   background-size: cover;
   justify-content: center;
   align-items: center;
   border-bottom-right-radius: 180px;
   margin-bottom: 50px;
   h1 {
      text-align: center;
   }
   @media screen and (max-width: 768px) {
      height: 260px;
      padding: 10px 0px;
      border-radius: 0px 0px 44.9376px 0px;
      margin-bottom: 10px;
      h1 {
         max-width: 207px;
      }
   }
`

const CardContainer = styled(Flex)`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: repeat(auto, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 25px;

   @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
   }
   @media screen and (max-width: 758px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
   }
`

const HeaderBanner = styled(Flex)`
   max-width: 1440px;
   width: 100%;
   margin: 0 auto;
   justify-content: center;
   align-items: center;
   border-bottom-right-radius: 180px;
   background-repeat: no-repeat;
   background-size: cover;
   object-fit: cover;
   object-position: top center;
   padding: 150px 0px 20px;
   height: 511px;
   margin-bottom: 50px;
   h1 {
      text-align: center;
   }
   @media screen and (max-width: 768px) {
      height: 260px;
      padding: 10px 0px;
      border-radius: 0px 0px 44.9376px 0px;
      margin-bottom: 10px;
      h1 {
         max-width: 207px;
      }
   }
`

const ServiceDescription = styled.div`
   display: flex;
   align-items: center;
   max-width: 1440px;
   width: 100%;
   margin: 0 auto;
   padding: 0px 50px;
   @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
      padding: 0px 31px;
   }
`

const StyledCard = styled(Card)`
   height: 314px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: end;
   padding: 10px;

   @media screen and (max-width: 768px) {
      height: 175px;
      padding: 10px;
      max-width: 100% !important;
   }
`

const CardSubTitle = styled(Flex)`
   max-width: 221px;
   border-radius: 20px;
   font-size: 18px;
   @media screen and (max-width: 768px) {
      h1 {
         font-size: 12px;
      }
   }
`

const TypeOfItems = styled(Flex)`
   max-width: 1440px;
   width: 100%;
   margin: 0 auto;
   flex-direction: column;
   gap: 20px;
   min-height: 30%;
   align-items: flex-start;
   padding: 80px 22px 40px;
   @media screen and (max-width: 768px) {
      padding: 40px 16px;
      gap: 20px;
   }
`

const Container = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   @media screen and (max-width: 768px) {
      padding: 0px 0px 10px;
   }
`

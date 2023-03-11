/* eslint-disable no-irregular-whitespace */
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { DeviceSize } from '../../../utils/constants'
import backgroundImage from '../../assets/images/backgroundImage.png'
import img from '../../assets/images/img.png'
import Card from '../../components/UI/cards/Card'
import { Flex, Grid } from '../../styles/style-for-positions/style'
import { Text, Title } from '../../styles/typography/style'

const cardData = [
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
   {
      id: Math.random().toString(),
      img,
   },
]

const OurWorksPage = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   return (
      <Container>
         <InnerContainer>
            <OurWorksDescription>
               <Flex minWidth="40%" align="center">
                  <Title size={isMobile ? '25px' : '50px'} uppercase>
                     Наши работы
                  </Title>
               </Flex>
               <Text
                  size={isMobile ? '14px' : '19px'}
                  weight="300"
                  align={isMobile && 'center'}
               >
                  Здесь мы собрали наши лучшие проекты, чтобы вы могли
                  вдохновиться идеями для собственного проекта. Вы найдёте
                  проект по душе и нраву, который захотите воплотить в жизнь.
               </Text>
            </OurWorksDescription>
            <CardContainer>
               {cardData.map((card, index) => {
                  if (index <= 9) {
                     return (
                        <StyledCard
                           key={card.id}
                           img={card?.img}
                           className={`div${index + 1}`}
                        />
                     )
                  }
                  return ''
               })}
            </CardContainer>
         </InnerContainer>
      </Container>
   )
}

export default OurWorksPage

const CardContainer = styled(Grid)`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   grid-template-rows: repeat(4, 1fr);
   grid-column-gap: 30px;
   grid-row-gap: 25px;
   padding: 0px 20px 0px 20px;

   .div1 {
      grid-area: 1 / 1 / 3 / 3;
      height: 390px;
   }
   .div2 {
      grid-area: 1 / 3 / 2 / 5;
      height: 278px;
   }
   .div3 {
      grid-area: 1 / 5 / 2 / 7;
      height: 278px;
   }
   .div4 {
      grid-area: 2 / 1 / 3 / 3;
      margin-top: 20px;
      height: 270px;
   }
   .div5 {
      grid-area: 2 / 3 / 3 / 7;
      height: 374px;
      position: relative;
      bottom: 85px;
   }
   .div6 {
      grid-area: 3 / 1 / 4 / 2;
      height: 278px;
      position: relative;
      bottom: 70px;
   }
   .div7 {
      grid-area: 3 / 2 / 5 / 4;
      height: 278px;
      position: relative;
      bottom: 70px;
   }
   .div8 {
      grid-area: 3 / 4 / 5 / 7;
      height: 278px;
      position: relative;
      bottom: 70px;
   }
   .div9 {
      grid-area: 4 / 1 / 6 / 5;
      height: 278px;
      position: relative;
      bottom: 150px;
   }
   .div10 {
      grid-area: 4 / 5 / 6 / 7;
      height: 278px;
      position: relative;
      bottom: 150px;
   }
   @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      padding: 0px 0px 20px;
      div {
         position: static !important;
         height: 280px !important;
         width: 100%;
         grid-area: auto !important;
         margin: 0 !important;
      }
   }
   @media (max-width: 750px) {
      grid-template-columns: 1fr 1fr;
   }
   @media (max-width: 550px) {
      grid-template-columns: 1fr;
   }
`

const StyledCard = styled(Card)`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: end;
   cursor: pointer;
   @media screen and (max-width: 768px) {
      height: 280px;
      padding: 10px;
      max-width: 100% !important;
   }
   @media screen and (max-width: 450px) {
      height: 175px;
      padding: 10px;
      max-width: 100% !important;
   }
`

const InnerContainer = styled(Flex)`
   width: 100%;
   gap: 140px;
   flex-direction: column;
   align-items: flex-start;
   background-repeat: no-repeat;
   max-width: 1400px;
   margin: 0 auto;
   padding: 0 22px 0;
   isolation: isolate;
   @media screen and (max-width: 768px) {
      gap: 40px;
      padding: 0 16px 0;
   }
`

const OurWorksDescription = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
   }
`

const Container = styled.div`
   width: 100%;
   position: relative;
   background-image: url(${backgroundImage});
   background-repeat: no-repeat;
   background-size: contain;
   display: flex;
   flex-direction: column;
   padding: 200px 0px 0px;

   @media screen and (max-width: 768px) {
      padding: 80px 0px 20px;
   }
`

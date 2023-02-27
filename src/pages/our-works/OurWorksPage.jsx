/* eslint-disable no-irregular-whitespace */
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import Card from '../../components/UI/cards/Card'
import { Flex, Grid } from '../../styles/style-for-positions/style'
import { Text, Title } from '../../styles/typography/style'
import { DeviceSize } from '../../utils/constants'

const img =
   'https://s3-alpha-sig.figma.com/img/3278/d093/ea8ba5bbfef695850cff22342d509911?Expires=1678060800&Signature=C8AOqRQybc640DwoU2JtVbk4fwS0~oDNNNq6AMEl0kSBYEZmLWJ87f3Jmk51HwFl~c2-BB3PwDwvdZzXG1M4O9ngIeX4TSTMo3ZdBZ3EWW0rNOlRNFuWZfBYx95CI86mVcZknGMJfWq22Gu8z2667MkagoZCEaxDbAfTEoQRlsN4AHicMLeLRguT1TZpOLo3~Pc~QFpKy3oBFLrvca~niSwR5vY0RW~lwPeGJFG9E5kCr-hAHhvs1efgagSvhUL72eP8MZGN4I6LG6gsStoeVlvEDunPvskroYyvN31EmMJ6Jvk2LcEB7lvJcsmCXhL-7xG4k28dEJTyalTU1etF7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

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
            {!isMobile && (
               <CardContainer>
                  {cardData.map((card, index) => (
                     <StyledCard
                        key={card.id}
                        img={card?.img}
                        className={`div${index + 1}`}
                     />
                  ))}
               </CardContainer>
            )}

            {isMobile && (
               <CardContainerMobile>
                  {cardData.map((card) => (
                     <StyledCard key={card.id} img={card?.img} />
                  ))}
               </CardContainerMobile>
            )}
         </InnerContainer>
      </Container>
   )
}

export default OurWorksPage

const CardContainerMobile = styled(Flex)`
   width: 100%;
   gap: 25px;
   flex-direction: column;
`

const CardContainer = styled(Grid)`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   grid-template-rows: repeat(4, 1fr);
   grid-column-gap: 30px;
   grid-row-gap: 25px;

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
   background: url(${({ bgImg }) => bgImg});
   background-repeat: no-repeat;
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
   background-repeat: no-repeat;
   background-size: contain;
   display: flex;
   flex-direction: column;
   padding: 200px 0px 0px;
   max-width: 1440px;
   margin: 0 auto;

   @media screen and (max-width: 768px) {
      padding: 80px 0px 40px;
   }
`

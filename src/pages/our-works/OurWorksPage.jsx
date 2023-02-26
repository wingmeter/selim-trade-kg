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
      title: 'Промышленные секционные ворота',
      id: Math.random().toString(),
      img,
   },
   {
      title: 'Промышленные секционные ворота Промышленные секционные ворота',
      id: Math.random().toString(),
      img,
   },
   {
      title: 'Промышленные секционные ворота',
      id: Math.random().toString(),
      img,
      height: '500px',
   },
   {
      title: 'Промышленные секционные ворота',
      id: Math.random().toString(),
      img,
   },
   {
      title: 'Промышленные секционные ворота',
      id: Math.random().toString(),
      img,
      height: '200px',
   },
   {
      title: 'Промышленные секционные ворота',
      id: Math.random().toString(),
      img,
   },
   {
      title: 'Промышленные секционные ворота',
      id: Math.random().toString(),
      img,
   },
]

const OurWorksPage = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   return (
      <Container>
         <InnerContainer>
            <ServiceDescription>
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
            </ServiceDescription>

            <Grid
               width="100%"
               columns="repeat(auto-fit, minmax(350px, 1fr))"
               justify="center"
               rows="1fr 1fr"
               columnGap="18px"
               rowGap="35px"
            >
               {cardData.map((card) => (
                  <StyledCard
                     key={card.id}
                     img={card?.img}
                     gridArea={card.height}
                  />
               ))}
            </Grid>
         </InnerContainer>
      </Container>
   )
}

export default OurWorksPage

const StyledCard = styled(Card)`
   height: ${({ height }) => height || '350px'};
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: end;
   cursor: pointer;
   /* grid-area: 2 / 2 / 3 / 5; */
   @media screen and (max-width: 768px) {
      height: 175px;
      padding: 10px;
   }
`

const InnerContainer = styled(Flex)`
   background: url(${({ bgImg }) => bgImg});
   background-repeat: no-repeat;
   flex-direction: column;
   gap: 200px;
   width: 100%;
   min-height: 100vh;
   align-items: flex-start;
   padding: 0 22px 0;
   isolation: isolate;
   @media screen and (max-width: 768px) {
      padding: 0 16px 0;
      gap: 40px;
   }
`

const ServiceDescription = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
   }
`

const Container = styled.div`
   position: relative;
   background-repeat: no-repeat;
   background-size: contain;
   display: flex;
   flex-direction: column;
   padding: 200px 0px 100px;
   max-width: 1500px;
   width: 100%;
   margin: 0 auto;

   @media screen and (max-width: 768px) {
      padding: 80px 0px 80px;
   }
`

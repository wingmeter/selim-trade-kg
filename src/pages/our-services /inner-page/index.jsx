/* eslint-disable no-irregular-whitespace */
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import backgroundImage from '../../../assets/images/backgroundImage.png'
import leafs from '../../../assets/images/leafs.png'
// import FeedbackForm from '../../../components/form/FeedbackForm'
import Card from '../../../components/UI/cards/Card'
import { Flex, Grid } from '../../../styles/style-for-positions/style'
import { Text, Title } from '../../../styles/typography/style'
import { DeviceSize } from '../../../utils/constants'

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

const ServicesDetail = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   const navigate = useNavigate()

   const showInnerPage = () => navigate(`/`)
   return (
      <Container sectionImg={leafs}>
         <img src={leafs} alt="leafs" />
         <InnerContainer bgImg={backgroundImage}>
            <ServiceDescription>
               <Flex minWidth="50%">
                  <Title size={isMobile ? '16px' : '70px'} uppercase>
                     Наши услуги
                  </Title>
               </Flex>
               <Text
                  size={isMobile ? '14px' : '19px'}
                  weight="300"
                  align={isMobile && 'center'}
               >
                  Наши сотрудники прошли сертифицированные тренинги в Учебных
                  центрах ГК DoorHan в г. Москва, г. Алматы, г. Астаны
                  а так же успешно сдали экзамены и являются обладателями
                  сертификатов по направлениям «Воротные системы, ролл ставни,
                  ролл ворота, автоматические системы», «Монтаж автоматики».
               </Text>
            </ServiceDescription>

            <Grid
               width="100%"
               columns={isMobile ? '1fr' : '1fr 1fr'}
               justify="center"
               rows="1fr 1fr"
               columnGap="18px"
               rowGap="35px"
            >
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
            </Grid>
         </InnerContainer>
      </Container>
   )
}

export default ServicesDetail

const StyledCard = styled(Card)`
   height: 350px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: end;
   cursor: pointer;
   :hover {
      transform: scale(1.003);
   }
   @media screen and (max-width: 768px) {
      height: 175px;
      padding: 10px;
   }
`

const CardSubTitle = styled(Flex)`
   max-width: 512px;
   background: rgba(0, 0, 0, 0.2);
   backdrop-filter: blur(2px);
   /* Note: backdrop-filter has minimal browser support */
   border-radius: 20px;
   padding: 8px 10px;
   font-size: 25px;
   @media screen and (max-width: 768px) {
      padding: 5px 8px;
      h1 {
         font-size: 12px;
      }
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
   /* align-items: flex-start; */
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
   overflow: hidden;
   img {
      position: absolute;
      top: -60px;
      left: -80px;
      /* transform: rotate(45deg); */
      z-index: -3;
   }
   @media screen and (max-width: 768px) {
      padding: 80px 0px 80px;
   }
`

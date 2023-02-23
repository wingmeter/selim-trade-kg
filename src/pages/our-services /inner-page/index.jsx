/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import Advantages from '../../../components/our-services/Advantages'
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
]

const ServicesInnerPage = ({ title, image }) => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   const navigate = useNavigate()

   const showInnerPage = () => navigate(`/`)
   return (
      <Container>
         <HeaderBanner banner={image || img}>
            <Title white size={isMobile ? '16px' : '70px'} uppercase>
               {title || 'Промышленные секционные ворота'}
            </Title>
         </HeaderBanner>
         <ServiceDescription>
            <Text
               size={isMobile ? '14px' : '19px'}
               weight="300"
               align={isMobile && 'center'}
            >
               Наши сотрудники прошли сертифицированные тренинги в Учебных
               центрах ГК DoorHan в г. Москва, г. Алматы, г. Астаны
               а так же успешно сдали экзамены и являются обладателями
               сертификатов по направлениям «Воротные системы, ролл ставни, ролл
               ворота, автоматические системы», «Монтаж автоматики».
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
         <br />
         <Advantages />
      </Container>
   )
}

export default ServicesInnerPage

const CardContainer = styled(Flex)`
   flex-wrap: nowrap;
   width: 100%;
   gap: 20px;
   @media screen and (max-width: 768px) {
      flex-direction: column;
   }
`

const HeaderBanner = styled(Flex)`
   justify-content: center;
   align-items: center;
   border-bottom-right-radius: 180px;
   background: url(${({ banner }) => banner});
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
      border-bottom-right-radius: 40px;
      margin-bottom: 10px;
      h1 {
         max-width: 207px;
      }
   }
`

const ServiceDescription = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   padding: 0px 50px;
   @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
      padding: 0px 31px;
   }
`

const StyledCard = styled(Card)`
   height: 314px;
   max-width: 256px !important;
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
   background: url(${({ bgImg }) => bgImg});
   background-repeat: no-repeat;
   flex-direction: column;
   gap: 20px;
   width: 100%;
   max-width: 100%;
   min-height: 100vh;
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
   max-width: 1440px;
   width: 100%;
   margin: 0 auto;
   @media screen and (max-width: 768px) {
      padding: 0px 0px 10px;
   }
`

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-irregular-whitespace */

import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import { DeviceSize } from '../../../utils/constants'
import backgroundImage from '../../assets/images/backgroundImage.png'
import img from '../../assets/images/img.png'
import leafs from '../../assets/images/leafs.png'
import Card from '../../components/UI/cards/Card'
import SkeletonCard from '../../components/UI/scleton/SkeletonCard'
import { Flex, Grid } from '../../styles/style-for-positions/style'
import { Text, Title } from '../../styles/typography/style'

export const cardData = [
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

const OurServices = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   const navigate = useNavigate()

   const showInnerPage = (id) => navigate(`${id}`)
   return (
      <Container sectionImg={leafs}>
         <img src={leafs} alt="leafs" loading="lazy" />
         <InnerContainer>
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
            <CardsBackground>
               <StyledGrid columns={isMobile ? '1fr' : '1fr 1fr'}>
                  {cardData.map((card) =>
                     card ? (
                        <StyledCard
                           key={card.id}
                           img={card?.img}
                           onClick={() => showInnerPage(card.id)}
                        >
                           <CardSubTitle>
                              <Title white>{card?.title}</Title>
                           </CardSubTitle>
                        </StyledCard>
                     ) : (
                        <SkeletonCard key={card.id} />
                     )
                  )}
               </StyledGrid>
            </CardsBackground>
         </InnerContainer>
      </Container>
   )
}

export default OurServices

const StyledGrid = styled(Grid)`
   max-width: 1400px;
   width: 100%;
   margin: 0 auto;
   padding: 0 24px;
   justify-content: center;
   grid-template-rows: 1fr 1fr;
   column-gap: 18px;
   row-gap: 35px;
   @media screen and (max-width: 900px) {
      padding: 0;
      row-gap: 30px;
   }
   @media screen and (max-width: 768px) {
      padding: 0;
      row-gap: 30px;
   }
`

const CardsBackground = styled(Flex)`
   background-image: url(${backgroundImage});
   background-repeat: no-repeat;
   background-size: cover;
   width: 100%;
   max-width: 100%;
   @media screen and (max-width: 768px) {
      background: none;
   }
`

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
      height: 300px;
      padding: 10px;
   }
   @media screen and (max-width: 500px) {
      height: 180px;
      padding: 10px;
   }
`

const CardSubTitle = styled(Flex)`
   max-width: 512px;
   background: rgba(0, 0, 0, 0.2);
   backdrop-filter: blur(2px);
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
   flex-direction: column;
   align-items: flex-start;
   gap: 200px;
   width: 100%;
   isolation: isolate;
   @media screen and (max-width: 768px) {
      padding: 0 16px 0;
      gap: 40px;
   }
`

const ServiceDescription = styled.div`
   display: flex;
   align-items: center;
   max-width: 1400px;
   width: 100%;
   margin: 0 auto;
   padding: 0 24px;

   @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
   }
`

const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin: 0 auto;
   overflow: hidden;
   position: relative;
   padding: 200px 0px 100px;
   img {
      position: absolute;
      top: -200px;
      left: -200px;
      transform: rotate(241deg);
      z-index: -3;
      object-fit: top center;
      @media screen and (max-width: 768px) {
         display: none;
      }
   }
   @media screen and (max-width: 768px) {
      padding: 80px 0px 80px;
   }
`

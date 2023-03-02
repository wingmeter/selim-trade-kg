/* eslint-disable no-irregular-whitespace */
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import img from '../../assets/images/newsBG.png'
import { ButtonOutlined } from '../../components/UI/buttons/ButtonOutlined'
import Card from '../../components/UI/cards/Card'
import { Flex } from '../../styles/style-for-positions/style'
import { Text, Title } from '../../styles/typography/style'
import { DeviceSize } from '../../utils/constants'

const cardData = [
   {
      id: 1,
      title: 'РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH',
      img,
   },
   {
      id: 2,
      title: 'РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH',

      img,
   },
   {
      id: 3,
      title: 'РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH',

      img,
   },
   {
      id: 4,
      title: 'РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH',
      img,
   },
   {
      id: 5,
      title: 'РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH',
      img,
   },
   {
      id: 6,
      title: 'РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH',
      img,
   },
   {
      id: 7,
      title: 'РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH',
      img,
   },
   {
      id: 8,
      title: 'РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH',
      img,
   },
   {
      id: 9,
      title: 'РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH',
      img,
   },
]

const NewsPage = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   return (
      <Container>
         <InnerContainer>
            <NewsDescription>
               <Flex minWidth="40%" align="center">
                  <Title size={isMobile ? '25px' : '50px'} uppercase>
                     Новости компании
                  </Title>
               </Flex>
               <Text
                  size={isMobile ? '14px' : '19px'}
                  weight="300"
                  align={isMobile && 'center'}
               >
                  К вашему вниманию здесь мы собрали <br /> все актуальные
                  новости нашей компании
               </Text>
            </NewsDescription>
            <div>
               <CardContainer>
                  {cardData.map((data) => (
                     <Link to={`${data.id}`}>
                        <StyledCard img={data.img}>
                           <StyledTitle>{data.title}</StyledTitle>
                        </StyledCard>
                     </Link>
                  ))}
               </CardContainer>
               <StyledButtonOutlined>загрузить ещё</StyledButtonOutlined>
            </div>
         </InnerContainer>
      </Container>
   )
}

export default NewsPage

const InnerContainer = styled(Flex)`
   width: 100%;
   gap: 120px;
   margin-bottom: 160px;
   flex-direction: column;
   align-items: flex-start;
   padding: 0 22px 0;
   @media screen and (max-width: 768px) {
      gap: 40px;
      padding: 0 16px 0;
   }
`

const NewsDescription = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
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
   max-width: 1500px;
   margin: 0 auto;

   @media screen and (max-width: 768px) {
      padding: 80px 0px 40px;
   }
`
const CardContainer = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(3, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 40px;

   @media screen and (max-width: 576px) {
      display: flex;
      flex-direction: column;
      gap: 30px;
   }
`
const StyledCard = styled(Card)`
   text-align: center;
   padding: 90px 28px;
   cursor: pointer;

   @media screen and (max-width: 769px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 225px;
      padding: 70px 20px;
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

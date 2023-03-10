import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

// import img from '../../assets/images/newsBG.png'
import { DeviceSize } from '../../../utils/constants'
import microBG from '../../assets/images/microBG.png'
import newsInnerBG from '../../assets/images/newsInnerBG.png'
import Tablet from '../../assets/images/Tablet.png'
import Card from '../../components/UI/cards/Card'
import { Flex } from '../../styles/style-for-positions/style'
import { SubTitle } from '../main-page/style'
// import { Text, Title } from '../../styles/typography/style'

const cardData = [
   {
      id: 1,
      title: 'РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ PCB-SH',
      img: microBG,
   },
   {
      id: 2,
      title: 'РАСШИРЕНИЕ ДИЗАЙНА ВОРОТ СТАДНАРТНОЙ СЕРИИ RSD01SC BIW',
      img: microBG,
   },
   {
      id: 3,
      title: 'СНИЖЕНИЕ ЦЕН НА ОСНОВНУЮ ЛИНЕЙКУ АВТОМАТИКИ DOORHAN',
      img: microBG,
   },
]

const NewsInnerPage = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   return (
      <Container>
         <InnerContainer>
            <ProductDescriptionContainer>
               {!isMobile && (
                  <ProductImage>
                     <img src={newsInnerBG} alt="newsInnerBG" />
                  </ProductImage>
               )}

               <ProductDescription>
                  <ProductTitle>
                     Расширение дизайна ворот стандартной серии RSD01SC BIW
                  </ProductTitle>
                  <ProductDescriptionTitle>
                     Компания «SelimTrade» сообщает вам о расширении вариантов
                     дизайна гаражных секционных ворот стандартной серии RSD01SC
                     BIW. С 10 марта 2016 года для заказа стали доступны ворота
                     с дизайном панели «доска» в трёх цветовых решениях (RAL
                     9003, RAL 8014 и «золотой дуб»).
                  </ProductDescriptionTitle>
                  {isMobile && (
                     <ProductImage>
                        <img src={newsInnerBG} alt="newsInnerBG" />
                     </ProductImage>
                  )}
                  <ProductTypes>
                     <img src={Tablet} alt="Tablet" />
                  </ProductTypes>
               </ProductDescription>
            </ProductDescriptionContainer>
            <SimilarContainer>
               <StyledSubTitle>Последние новости</StyledSubTitle>
               <CardContainer>
                  {cardData.map((data) => (
                     <StyledCard img={data.img}>
                        <StyledTitle>{data.title}</StyledTitle>
                     </StyledCard>
                  ))}
               </CardContainer>
            </SimilarContainer>
         </InnerContainer>
      </Container>
   )
}

export default NewsInnerPage

const InnerContainer = styled(Flex)`
   width: 100%;
   margin-bottom: 160px;
   flex-direction: column;
   align-items: flex-start;
   padding: 0 22px 0;
   @media screen and (max-width: 769px) {
      gap: 40px;
      padding: 0 16px 0;
   }
`
const ProductDescriptionContainer = styled.div`
   display: flex;
   gap: 50px;

   @media screen and (max-width: 769px) {
      flex-direction: column;
      align-items: center;
      gap: 25px;
   }
`

const ProductDescriptionTitle = styled.p`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 300;
   font-size: 20px;
   line-height: 140%;
   text-align: justify;
   color: #414141;

   @media screen and (max-width: 769px) {
      font-size: 14px;
   }
`

const ProductDescription = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
   align-items: center;
`

const ProductTitle = styled.h1`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 40px;
   line-height: 150%;
   text-transform: uppercase;
   color: #414141;
   @media screen and (max-width: 769px) {
      font-size: 16px;
   }
`

const ProductTypes = styled.div`
   img {
      @media screen and (max-width: 769px) {
         width: 350px;
         height: 168px;
      }
   }
`

const ProductImage = styled.div`
   img {
      @media screen and (max-width: 769px) {
         width: 336px;
         height: 350px;
      }
   }
`
const Container = styled.div`
   width: 100%;
   position: relative;
   background-repeat: no-repeat;
   background-size: contain;
   display: flex;
   flex-direction: column;
   padding: 180px 0px 0px;
   max-width: 1500px;
   margin: 0 auto;

   @media screen and (max-width: 769px) {
      padding: 80px 0px 40px;
   }
`
const StyledSubTitle = styled(SubTitle)`
   text-align: start;
   margin-bottom: 35px;
`
const CardContainer = styled.div`
   display: flex;
   gap: 20px;

   @media screen and (max-width: 769px) {
      overflow: hidden;
      overflow-x: scroll;
   }
`
const StyledCard = styled(Card)`
   text-align: center;
   padding: 90px 28px;

   @media screen and (max-width: 769px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 160px;
      padding: 70px;
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
const SimilarContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin-top: 140px;
   @media screen and (max-width: 769px) {
      margin-top: 50px;
   }
`
// const StyledCard = styled(Card)`
//    text-align: center;
//    padding: 90px 28px;
//    cursor: pointer;

//    @media screen and (max-width: 769px) {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 225px;
//       padding: 70px 20px;
//    }
// `
// const StyledTitle = styled.p`
//    font-family: 'Montserrat';
//    font-style: normal;
//    font-weight: 800;
//    font-size: 20px;
//    color: #f1f6ff;
//    @media screen and (max-width: 769px) {
//       font-size: 10px;
//    }
// `

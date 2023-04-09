import { useMediaQuery } from 'react-responsive'
import { useNavigate, useParams } from 'react-router'
import styled from 'styled-components'

import {
   useGetAllNewsQuery,
   useGetNewsByIdQuery,
} from '../../../store/admin/news/newsApi'
import { DeviceSize } from '../../../utils/constants'
import { getImgUrl } from '../../../utils/helpers/general'
import Tablet from '../../assets/images/Tablet.png'
import Card from '../../components/UI/cards/Card'
import LazyImage from '../../components/UI/lazy-loading/LazyLoading'
import { Flex } from '../../styles/style-for-positions/style'
import { SubTitle } from '../main-page/style'

const NewsInnerPage = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   const { id } = useParams()
   const navigate = useNavigate()

   const { data: newsById, isFetchingNews } = useGetNewsByIdQuery(id)

   const { data: news, isFetching } = useGetAllNewsQuery({
      pageSize: 3,
   })

   const onNavigateToInnerPage = (id) => {
      navigate(`/news/${id}`)
      window.scrollTo(0, 0)
   }

   if (isFetching || isFetchingNews) {
      return (
         <div className="d-flex justify-content-center mx-auto my-4">
            <div className="spinner-border" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
         </div>
      )
   }

   return (
      <Container>
         <InnerContainer>
            <ProductDescriptionContainer>
               {!isMobile && (
                  <ProductImage>
                     <LazyImage
                        src={getImgUrl(newsById?.photoUrl)}
                        alt="newsInnerBG"
                     />
                  </ProductImage>
               )}

               <ProductDescription>
                  <ProductTitle>{newsById?.title}</ProductTitle>
                  <ProductDescriptionTitle>
                     {newsById?.description}
                  </ProductDescriptionTitle>
                  {isMobile && (
                     <ProductImage>
                        <LazyImage
                           src={getImgUrl(newsById?.photoUrl)}
                           alt="newsInnerBG"
                        />
                     </ProductImage>
                  )}
                  <ProductTypes>
                     <LazyImage src={Tablet} alt="Tablet" />
                  </ProductTypes>
               </ProductDescription>
            </ProductDescriptionContainer>
            <SimilarContainer>
               <StyledSubTitle>Последние новости</StyledSubTitle>
               <CardContainer>
                  {news?.content?.map((data) => (
                     <StyledCard
                        className="news-card"
                        key={data?.id}
                        img={getImgUrl(data?.photoUrl)}
                        onClick={() => onNavigateToInnerPage(data?.id)}
                     >
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
   .news-card {
      cursor: pointer;
   }
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

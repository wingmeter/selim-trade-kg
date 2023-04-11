/* eslint-disable import/no-unresolved */
import { Container } from '@mui/material'
import styled from 'styled-components'
import SwiperCore, {
   Navigation,
   Pagination,
   Controller,
   Thumbs,
   EffectCoverflow,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { useGetAllReviewsShortQuery } from '../../../../store/admin/reviews/reviewApi'
import { getImgUrl } from '../../../../utils/helpers/general'
import { ReactComponent as LeftArrow } from '../../../assets/icons/Left1.svg'
import { ReactComponent as RightArrow } from '../../../assets/icons/Right.svg'
import FeedbackBG from '../../../assets/images/FeedbackBG.png'
import CardFeadback from '../../../components/UI/cards/CardFeadback'
import { SubTitle } from '../style'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, EffectCoverflow])

const EighthSection = () => {
   const { data: reviews, isFetching } = useGetAllReviewsShortQuery({
      pageNo: 0,
   })
   return (
      <StyledSection>
         <Container>
            <StyledSubTitle>Отзывы наших клиентов</StyledSubTitle>
            {isFetching ? (
               <div className="d-flex justify-content-center mx-auto my-5">
                  <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
               </div>
            ) : (
               <CardContainer>
                  <SwiperButton className="image-swiper-button-next">
                     <RightArrow />
                  </SwiperButton>
                  <SwiperButton className="swiper-button image-swiper-button-prev">
                     <LeftArrow />
                  </SwiperButton>
                  <Swiper
                     id="works"
                     tag="div"
                     spaceBetween={10}
                     loop
                     slidesPerView={4}
                     breakpoints={{
                        320: {
                           slidesPerView: 1,
                        },
                        768: {
                           spaceBetween: 10,
                           slidesPerView: 3,
                        },
                        1024: {
                           width: 980,
                           spaceBetween: 10,
                           slidesPerView: 3,
                        },
                        1240: {
                           spaceBetween: 10,
                           slidesPerView: 4,
                        },
                     }}
                     className="mySwiper"
                     grabCursor
                     navigation={{
                        nextEl: '.image-swiper-button-next',
                        prevEl: '.image-swiper-button-prev',
                        disabledClass: 'swiper-button-disabled',
                     }}
                     modules={[Navigation]}
                  >
                     {reviews?.content?.map((data) => (
                        <SwiperSlide key={data.id}>
                           <StyledCard
                              key={data.id}
                              type={data.gate}
                              img={getImgUrl(data.photoUrl)}
                              feedback={data.text}
                              name={data.name}
                           />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </CardContainer>
            )}
         </Container>
      </StyledSection>
   )
}

export default EighthSection

const StyledSection = styled.section`
   margin-bottom: 60px;

   @media screen and (max-width: 769px) {
      height: 320px;
   }

   .MuiContainer-root {
      @media (min-width: 1200px) {
         max-width: 1400px;
      }
   }
   .swiper {
      margin: 0 auto;
      padding-top: 30px;
      padding-bottom: 20px;
      padding-left: 5px;
      padding-right: 5px;
      margin-bottom: 20px;
   }

   .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
   }
   .swiper-3d .swiper-slide-shadow-right {
      background-image: none;
   }
`
const StyledSubTitle = styled(SubTitle)`
   text-align: center;
   margin-bottom: 60px;

   @media screen and (max-width: 769px) {
      margin-top: 60px;
      margin-bottom: 30px;
   }
`
const CardContainer = styled.div`
   display: flex;
   gap: 20px;
   padding: 20px 5px;

   position: relative;
   margin-top: 15px;

   .image-swiper-button-prev {
      right: 5%;
      @media screen and (max-width: 769px) {
         right: 52%;
      }
   }
   .image-swiper-button-next {
      right: 0;
      @media screen and (max-width: 769px) {
         right: 42%;
      }
      @media screen and (max-width: 426px) {
         right: 29%;
      }
   }
   .swiper-button-disabled {
      opacity: 0.5;
   }

   @media screen and (max-width: 769px) {
      overflow: hidden;
      overflow-x: scroll;
      padding: 40px 5px;
   }
`
const StyledCard = styled(CardFeadback)`
   text-align: center;
`
const SwiperButton = styled.div`
   position: absolute;
   bottom: -5%;
   z-index: 10;
   cursor: pointer;
   width: 43px;
   height: 43px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   background: rgba(65, 65, 65, 0.15);
   border: 3.52891px solid #f1f6ff;

   @media screen and (max-width: 769px) {
      bottom: 5%;
   }
`

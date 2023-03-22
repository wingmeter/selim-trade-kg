/* eslint-disable import/no-unresolved */
import { Container } from '@mui/material'
import { useMediaQuery } from 'react-responsive'
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

import { DeviceSize } from '../../../../utils/constants'
import { ReactComponent as LeftArrow } from '../../../assets/icons/Left1.svg'
import { ReactComponent as RightArrow } from '../../../assets/icons/Right.svg'
import work1 from '../../../assets/images/work1.png'
import { SubTitle } from '../style'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, EffectCoverflow])

const cardData = [
   {
      id: 1,
      img: work1,
   },
   {
      id: 2,
      img: work1,
   },
   {
      id: 3,
      img: work1,
   },
   {
      id: 4,
      img: work1,
   },
   {
      id: 5,
      img: work1,
   },
]

const SixthSection = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   return (
      <StyledSection>
         <Container>
            <StyledSubTitle>Наши работы</StyledSubTitle>
            <SwiperContainer>
               {!isMobile && (
                  <>
                     <SwiperButton className="image-swiper-button-next">
                        <RightArrow />
                     </SwiperButton>
                     <SwiperButton className="swiper-button image-swiper-button-prev">
                        <LeftArrow />
                     </SwiperButton>
                  </>
               )}
               <Swiper
                  id="works"
                  tag="div"
                  spaceBetween={150}
                  slidesPerView={3}
                  effect="coverflow"
                  loop
                  breakpoints={{
                     320: {
                        width: 300,
                        height: 150,
                        spaceBetween: 25,
                        slidesPerView: 2,
                     },
                     375: {
                        width: 375,
                        spaceBetween: 25,
                        slidesPerView: 2,
                     },
                     425: {
                        width: 425,
                        spaceBetween: 50,
                        slidesPerView: 2,
                     },
                     768: {
                        width: 720,
                        spaceBetween: 100,
                        slidesPerView: 2,
                     },
                     1024: {
                        width: 980,
                        spaceBetween: 150,
                        slidesPerView: 3,
                     },
                     1240: {
                        spaceBetween: 170,
                        slidesPerView: 3,
                     },
                  }}
                  coverflowEffect={{
                     rotate: 0,
                     stretch: 0,
                     depth: 100,
                     modifier: 1,
                     slideShadows: true,
                  }}
                  className="mySwiper"
                  centeredSlides
                  grabCursor
                  navigation={{
                     nextEl: '.image-swiper-button-next',
                     prevEl: '.image-swiper-button-prev',
                     disabledClass: 'swiper-button-disabled',
                  }}
                  modules={[Navigation, EffectCoverflow]}
               >
                  {cardData.map((card) => (
                     <SwiperSlide key={`thumb-${card.id}`}>
                        <StyledImage src={card.img} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </SwiperContainer>
         </Container>
      </StyledSection>
   )
}

export default SixthSection

const StyledSection = styled.section`
   height: 500px;
   @media screen and (max-width: 769px) {
      padding-top: 50px;
      height: 400px;
   }

   .MuiContainer-root {
      @media (min-width: 1200px) {
         max-width: 1400px;
      }
   }

   .swiper {
      margin: 0 auto;
      padding-top: 20px;
   }

   .swiper-slide img {
      display: block;
      width: 100%;
   }

   .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
   }
   .swiper-3d .swiper-slide-shadow-right {
      background-image: none;
   }
`

const SwiperButton = styled.div`
   position: absolute;
   top: 50%;
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
`
const StyledImage = styled.img`
   border-radius: 20px;
   max-height: 420px;
`
const StyledSubTitle = styled(SubTitle)`
   text-align: center;
   margin-bottom: 35px;
`

const SwiperContainer = styled.div`
   position: relative;
   margin-top: 15px;

   .image-swiper-button-prev {
      left: 33%;
      @media screen and (max-width: 769px) {
         left: 20%;
      }
   }
   .image-swiper-button-next {
      right: 33%;
      @media screen and (max-width: 769px) {
         right: 20%;
      }
   }
   .swiper-button-disabled {
      opacity: 0.5;
   }
`

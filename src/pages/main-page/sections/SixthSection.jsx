import { Container } from '@mui/material'
import styled from 'styled-components'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { ReactComponent as LeftArrow } from '../../../assets/icons/Left1.svg'
import { ReactComponent as RightArrow } from '../../../assets/icons/Right.svg'
import work1 from '../../../assets/images/work1.png'
// import Card from '../../../components/UI/cards/Card'
import { SubTitle } from '../style'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs])

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
   return (
      <StyledSection>
         <Container>
            <StyledSubTitle>Наши работы</StyledSubTitle>
            <SwiperContainer>
               <SwiperButton className="image-swiper-button-next">
                  <RightArrow />
               </SwiperButton>
               <SwiperButton className="swiper-button image-swiper-button-prev">
                  <LeftArrow />
               </SwiperButton>
               <Swiper
                  id="main"
                  tag="div"
                  spaceBetween={40}
                  slidesPerView="auto"
                  // centeredSlides
                  grabCursor
                  navigation={{
                     nextEl: '.image-swiper-button-next',
                     prevEl: '.image-swiper-button-prev',
                     disabledClass: 'swiper-button-disabled',
                  }}
                  modules={[Navigation]}
               >
                  {cardData.map((card) => (
                     <SwiperSlide
                        key={`thumb-${card.id}`}
                        style={{ listStyle: 'none' }}
                     >
                        <StyledImage img={card.img} />
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
   }

   .MuiContainer-root {
      @media (min-width: 1200px) {
         max-width: 1400px;
      }
   }
`

const SwiperButton = styled.div`
   position: absolute;
   bottom: -64px;
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
const StyledImage = styled.div`
   background-image: url(${({ img }) => img || ''});
   filter: drop-shadow(0px 0px 10px #105bfb);
   border-radius: 20px;
   width: 440px;
   height: 300px;
`
const StyledSubTitle = styled(SubTitle)`
   text-align: center;
   margin-bottom: 35px;
`

const SwiperContainer = styled.div`
   position: relative;
   margin-top: 15px;

   .image-swiper-button-prev {
      left: 5px;
   }
   .image-swiper-button-next {
      right: 5px;
   }
   .swiper-button-disabled {
      opacity: 0.5;
   }
`

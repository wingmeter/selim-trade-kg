import { Container } from '@mui/material'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { useGetAllServicesQuery } from '../../../../store/client/gateTypesApi'
import { DeviceSize } from '../../../../utils/constants'
import { getImgUrl } from '../../../../utils/helpers/general'
import { ReactComponent as LeftArrow } from '../../../assets/icons/Left1.svg'
import { ReactComponent as RightArrow } from '../../../assets/icons/Right.svg'
import imageBG1 from '../../../assets/images/imageBG1.png'
import imagebg2 from '../../../assets/images/imagebg2.png'
import imageBG3 from '../../../assets/images/imageBG3.png'
import imageBG4 from '../../../assets/images/imageBG4.png'
import imageBG5 from '../../../assets/images/imageBG5.png'
import thirdBG from '../../../assets/images/thirdBG.png'
import { ButtonOutlined } from '../../../components/UI/buttons/ButtonOutlined'
import Card from '../../../components/UI/cards/Card'
import CardsSkeleton from '../../../components/UI/scleton/CardsSkeleton'
import Skeleletons from '../../../components/UI/scleton/Skeletons'
import { SubTitle } from '../style'

const cardData = [
   {
      title: 'Cеционные',
      id: Math.random().toString(),
      img: imageBG1,
   },
   {
      title: 'Автоматика',
      id: Math.random().toString(),
      img: imagebg2,
   },
   {
      title: 'Распашные',
      id: Math.random().toString(),
      img: imageBG3,
   },
   {
      title: 'Складные',
      id: Math.random().toString(),
      img: imageBG4,
   },
   {
      title: 'Роль ворота',
      id: Math.random().toString(),
      img: imageBG5,
   },
]

SwiperCore.use([Navigation, Pagination, Controller, Thumbs])

const ThirdSection = () => {
   const navigate = useNavigate()
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

   const { servicesData, isFetching, isLoading } = useGetAllServicesQuery(
      { pageNo: 0, pageSize: 5 },
      {
         selectFromResult: ({ data, isFetching, isLoading }) => ({
            servicesData: data ? data.content : [],
            isFetching,
            isLoading,
         }),
      }
   )
   return (
      <StyledSection>
         <Container>
            <StyledSubTitle>Мы предлагаем</StyledSubTitle>

            {!isMobile && (
               <CardContainer>
                  {(isFetching || isLoading) && <CardsSkeleton quantity={5} />}
                  {servicesData?.map((card, index) => (
                     <StyledCard
                        className={`item${index + 1}`}
                        key={card.id}
                        img={getImgUrl(card?.backgroundUrl)}
                     >
                        <CardSubTitle>{card?.name}</CardSubTitle>
                     </StyledCard>
                  ))}
               </CardContainer>
            )}
            {isMobile && (
               <SwiperContainer>
                  <div className="swiper-button image-swiper-button-next">
                     <RightArrow />
                  </div>
                  <div className="swiper-button image-swiper-button-prev">
                     <LeftArrow />
                  </div>
                  <Swiper
                     id="main"
                     tag="div"
                     wrapperTag="ul"
                     spaceBetween={0}
                     slidesPerView={1}
                     navigation={{
                        nextEl: '.image-swiper-button-next',
                        prevEl: '.image-swiper-button-prev',
                        disabledClass: 'swiper-button-disabled',
                     }}
                     modules={[Navigation]}
                  >
                     {(isFetching || isLoading) && <CardsSkeleton />}
                     {servicesData?.map((card, index) => (
                        <SwiperSlide
                           key={`thumb-${card.id}`}
                           tag="li"
                           style={{ listStyle: 'none' }}
                        >
                           <StyledCard
                              className={`div${index + 1}`}
                              key={card.id}
                              img={getImgUrl(card?.backgroundUrl)}
                           >
                              <CardSubTitle>{card?.name}</CardSubTitle>
                           </StyledCard>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </SwiperContainer>
            )}

            <StyledButtonOutlined
               onClick={() => {
                  navigate('/services')
                  window.scrollTo(0, 0)
               }}
            >
               смотреть все
            </StyledButtonOutlined>
         </Container>
      </StyledSection>
   )
}

export default ThirdSection

const CardContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(2, 1fr);
   grid-column-gap: 25px;
   grid-row-gap: 25px;
   margin-top: 25px;

   .item1 {
      grid-area: 1 / 1 / 2 / 2;
   }
   .item2 {
      grid-area: 1 / 2 / 2 / 3;
   }
   .item3 {
      grid-area: 2 / 1 / 3 / 2;
   }
   .item4 {
      grid-area: 2 / 2 / 3 / 3;
   }
   .item5 {
      grid-area: 1 / 3 / 3 / 4;
      height: 100%;
   }
`

const SwiperContainer = styled.div`
   position: relative;
   margin-top: 15px;
`

const StyledSection = styled.section`
   background-image: url(${thirdBG});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   height: 710px;

   @media screen and (max-width: 769px) {
      padding-top: 50px;
      height: 350px;
   }

   .MuiContainer-root {
      @media (min-width: 1200px) {
         max-width: 1400px;
      }
   }

   .swiper-button {
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
   }
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
const StyledSubTitle = styled(SubTitle)`
   text-align: center;
`
const StyledCard = styled(Card)`
   /* max-width: 672px; */
   height: 260px;
   padding: 9px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: end;
   cursor: pointer;
   transition: all 0.3s ease-in;
   border: 1px solid #414141;
   filter: blur(0.2px);
   :hover {
      transform: scale(1.003);
   }
   @media screen and (max-width: 768px) {
      height: 175px;
      padding: 10px;
   }
`

const CardSubTitle = styled.p`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 800;
   font-size: 28px;
   color: #f1f6ff;
   background: rgba(0, 0, 0, 0.2);
   border-radius: 18px;
   backdrop-filter: blur(2px);
   padding: 9px 13px;
   @media screen and (max-width: 768px) {
      padding: 5px 8px;
      font-size: 16px;
      h1 {
         font-size: 12px;
      }
   }
`
const StyledButtonOutlined = styled(ButtonOutlined)`
   display: flex !important;
   margin: 20px auto !important;
   @media screen and (max-width: 768px) {
      font-size: 12px !important;
   }
`

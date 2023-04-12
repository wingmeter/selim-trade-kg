/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { DeviceSize } from '../../../utils/constants'
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg'
import { ReactComponent as WhatsAppIcon } from '../../assets/icons/WhatsApp.svg'
import backgroundImage from '../../assets/images/backgroundImage.png'
import FooterLogo from '../../assets/images/footerLogo.png'
import FeedbackForm from '../../components/form/FeedbackForm'
import { Flex } from '../../styles/style-for-positions/style'

const Footer = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   return (
      <>
         <FooterWrapper bgImg={backgroundImage}>
            <FeedbackForm />
         </FooterWrapper>
         <FooterContainer>
            {!isMobile && (
               <Container>
                  <FirstBlock>
                     <LogoImg src={FooterLogo} alt="" />
                     <SocialNetworkContainer>
                        <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                        <SocialNetwork>
                           <a
                              href="https://www.instagram.com/"
                              target="_blank"
                              rel="noreferrer"
                           >
                              <Icons />
                           </a>
                           <a
                              href="https://www.whatsapp.com/?lang=ru"
                              target="_blank"
                              rel="noreferrer"
                           >
                              <IconsTwo />
                           </a>
                        </SocialNetwork>
                     </SocialNetworkContainer>
                  </FirstBlock>
                  <SecondBlock>
                     <li>
                        <Link to="/">Главная</Link>
                     </li>
                     <li>
                        <Link to="/"> О Нас</Link>
                     </li>
                     <li>
                        <Link to="/services"> Услуги</Link>
                     </li>
                     <li>
                        <Link to="/works"> Работы</Link>
                     </li>
                     <li>
                        <Link to="/"> Отзывы</Link>
                     </li>
                     <li>
                        <Link to="/news"> Новости</Link>
                     </li>
                  </SecondBlock>
                  <ThirdBlock>
                     <WorkTime>
                        <p>РЕЖИМ РАБОТЫ</p>
                        <p>Пн-Пт 8:30–18:30</p>
                        <p>Суббота 8:30–14:00</p>
                     </WorkTime>
                     <Phone>
                        <p>ТЕЛЕФОН</p>
                        <p>+996 (552) 57 07 55</p>
                        <p>+996 (500) 88 80 51</p>
                        <p>+996 (772) 32 76 76</p>
                     </Phone>
                  </ThirdBlock>
                  <FourthBlock>
                     <div className="mapouter">
                        <div className="gmap_canvas">
                           <iframe
                              id="gmap_canvas"
                              src="https://maps.google.com/maps?q=bishkek,%20ayni%2022+(My%20Business%20Name)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                           />
                        </div>
                     </div>
                  </FourthBlock>
               </Container>
            )}
            {isMobile && (
               <MobileContainer>
                  <MobileContainerTop>
                     <LogoImg src={FooterLogo} alt="logo" />
                     <ThirdBlock>
                        <WorkTime>
                           <p>РЕЖИМ РАБОТЫ</p>
                           <p>Пн-Пт 8:30–18:30</p>
                           <p>Суббота 8:30–14:00</p>
                        </WorkTime>
                        <Phone>
                           <p>ТЕЛЕФОН</p>
                           <p>+996 (552) 57 07 55</p>
                           <p>+996 (500) 88 80 51</p>
                           <p>+996 (772) 32 76 76</p>
                        </Phone>
                     </ThirdBlock>
                     <FourthBlock>
                        <div className="mapouter">
                           <div className="gmap_canvas">
                              <iframe
                                 id="gmap_canvas"
                                 src="https://maps.google.com/maps?q=bishkek,%20ayni%2022+(My%20Business%20Name)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                              />
                           </div>
                        </div>
                     </FourthBlock>
                  </MobileContainerTop>
                  <MobileContainerBottom>
                     <SocialNetworkContainer>
                        <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                        <SocialNetwork>
                           <a
                              href="https://www.instagram.com/"
                              target="_blank"
                              rel="noreferrer"
                           >
                              <Icons />
                           </a>
                           <a
                              href="https://www.whatsapp.com/?lang=ru"
                              target="_blank"
                              rel="noreferrer"
                           >
                              <IconsTwo />
                           </a>
                        </SocialNetwork>
                     </SocialNetworkContainer>
                     <SecondBlockMobile>
                        <ul>
                           <li>
                              <Link
                                 to="/"
                                 onClick={() => {
                                    window.scrollTo(0, 0)
                                 }}
                              >
                                 Главная
                              </Link>
                           </li>
                           <li>
                              <Link to="/"> О Нас</Link>
                           </li>
                           <li>
                              <Link
                                 to="/services"
                                 onClick={() => {
                                    window.scrollTo(0, 0)
                                 }}
                              >
                                 Услуги
                              </Link>
                           </li>
                        </ul>
                        <ul>
                           <li>
                              <Link
                                 to="/works"
                                 onClick={() => {
                                    window.scrollTo(0, 0)
                                 }}
                              >
                                 Работы
                              </Link>
                           </li>
                           <li>
                              <Link to="/"> Отзывы</Link>
                           </li>
                           <li>
                              <Link
                                 to="/news"
                                 onClick={() => {
                                    window.scrollTo(0, 0)
                                 }}
                              >
                                 Новости
                              </Link>
                           </li>
                        </ul>
                     </SecondBlockMobile>
                  </MobileContainerBottom>
               </MobileContainer>
            )}
         </FooterContainer>
         <CopyrightBlock>
            © 2023 Selim Trade. Данный сайт защищён от копирования. Любая
            передача данных в интернете запрещена.
         </CopyrightBlock>
      </>
   )
}

export default Footer

const FooterWrapper = styled(Flex)`
   background: url(${({ bgImg }) => bgImg});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   flex-direction: column;
   width: 100%;
   gap: 50px;
   padding: 0 22px 0;
   padding-bottom: 60px;
`

const FooterContainer = styled.footer`
   width: 100%;
   background: #f9f9f9;
   border-radius: 35px;
`

const MobileContainer = styled.div`
   padding: 30px 0;
   margin: 0 auto;
   height: 327px;
   max-width: 1440px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   gap: 10px;

   @media screen and (max-width: 769px) {
      height: 230px;
      padding: 30px 15px;
   }
`

const FirstBlock = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

const Container = styled.div`
   padding: 30px 0;
   margin: 0 auto;
   height: 327px;
   max-width: 1440px;
   display: flex;
   justify-content: space-around;

   @media screen and (max-width: 769px) {
      height: 230px;
      padding: 30px 15px;
   }
`

const SecondBlockMobile = styled.div`
   display: flex;
   gap: 10px;
   font-size: 12px;

   @media screen and (max-width: 769px) {
      gap: 50px;
   }

   @media screen and (max-width: 450px) {
      gap: 10px;
   }
`
const MobileContainerBottom = styled.div`
   display: flex;
   gap: 30px;

   @media screen and (max-width: 769px) {
      gap: 120px;
   }

   @media screen and (max-width: 450px) {
      display: flex;
      gap: 30px;
   }
`

const MobileContainerTop = styled.div`
   display: flex;
   justify-content: space-between;
`

const SecondBlock = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 15px;
   margin-top: 10px;

   li {
      font-weight: 500;
      font-size: 18px;
      text-transform: capitalize;
      color: #414141;
      @media screen and (max-width: 769px) {
         font-size: 12px;
      }
   }
`
const ThirdBlock = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 10px;
   gap: 30px;

   @media screen and (max-width: 769px) {
      margin-top: 0;
      gap: 30px;
      flex-direction: row;
   }
   @media screen and (max-width: 450px) {
      margin-top: 0;
      gap: 10px;
   }
`
const FourthBlock = styled.div`
   width: 580px;
   height: 270px;
   @media screen and (max-width: 769px) {
      width: 250px;
      height: 140px;
   }
   @media screen and (max-width: 450px) {
      width: 120px;
      height: 120px;
   }
   .mapouter {
      position: relative;
      text-align: right;
      height: 100%;
      width: 100%;
   }
   .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: 100%;
      width: 100%;

      iframe {
         height: 100%;
         width: 100%;
      }
   }
`

const LogoImg = styled.img`
   width: 100px;
   height: 52px;

   @media screen and (max-width: 450px) {
      width: 45px;
      height: 24px;
   }
`

const WorkTime = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   p {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      color: #414141;
      @media screen and (max-width: 769px) {
         font-size: 12px;
      }
   }
`

const Phone = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   p {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      color: #414141;
      @media screen and (max-width: 769px) {
         font-size: 12px;
      }
   }
`
const CopyrightBlock = styled.div`
   background: #5061ff;
   padding: 10px 50px;
   font-style: normal;
   font-weight: 300;
   font-size: 16px;
   color: #f1f6ff;

   @media screen and (max-width: 769px) {
      font-size: 10px;
   }
`
const SocialNetworkContainer = styled.div`
   p {
      @media screen and (max-width: 769px) {
         font-size: 12px;
      }
   }
`
const SocialNetwork = styled.div`
   display: flex;
   gap: 10px;
   margin-top: 10px;
`
const Icons = styled(InstagramIcon)`
   @media screen and (max-width: 769px) {
      width: 26px;
      height: 26px;
   }
`
const IconsTwo = styled(WhatsAppIcon)`
   @media screen and (max-width: 769px) {
      width: 26px;
      height: 26px;
   }
`

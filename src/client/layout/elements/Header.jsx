import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { DeviceSize } from '../../../utils/constants'
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg'
import { MobileNavLinks } from '../../components/navbar/MobileNavLinks'
import NavLinks from '../../components/navbar/NavLinks'

const Header = () => {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
   return (
      <HeaderContainer>
         <Container>
            <StyledLink to="/main">
               <Logo />
            </StyledLink>
            {!isMobile && <NavLinks />}
            {isMobile && <MobileNavLinks />}

            {!isMobile && (
               <InfoPart>
                  <p>г. Бишкек</p>
                  <a href="tel:+996552570755">+996 (552) 57 07 55</a>
               </InfoPart>
            )}
         </Container>
      </HeaderContainer>
   )
}

export default Header

const HeaderContainer = styled.header`
   width: 100%;
   position: absolute;
   top: 0;
   left: 0;
   z-index: 11;
`
const Container = styled.div`
   margin: 20px auto;
   max-width: 1400px;
   background: rgba(0, 0, 0, 0.4);
   backdrop-filter: blur(5px);
   border-radius: 10px;
   height: 50px;
   display: flex;
   align-items: center;
   padding: 0 135px;
   justify-content: space-between;

   @media screen and (max-width: 769px) {
      padding: 0 20px;
      background: transparent;
   }
`
const StyledLink = styled(Link)`
   cursor: pointer;
   display: flex;
`
const InfoPart = styled.div`
   display: flex;
   flex-direction: column;
   align-items: end;
   p,
   a {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      color: #ffffff;
   }
`

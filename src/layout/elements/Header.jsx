import React from 'react'

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Logo from '../../assets/images/logo.png.png'

const Header = () => {
   return (
      <HeaderContainer>
         <Container>
            <LogoImg src={Logo} alt="Logo" />
            <NavList>
               <li>
                  <StyledNavLink
                     to="main"
                     className={({ isActive }) => (isActive ? 'active' : '')}
                     end
                  >
                     Главная
                  </StyledNavLink>
               </li>
               <li>
                  <StyledNavLink to="services">Услуги</StyledNavLink>
               </li>
               <li>
                  <StyledNavLink to="news">Новости</StyledNavLink>
               </li>
               <li>
                  <StyledNavLink to="works">Наши работы</StyledNavLink>
               </li>
            </NavList>
            <div>Инфо</div>
         </Container>
      </HeaderContainer>
   )
}

export default Header

const HeaderContainer = styled.header`
   width: 100%;
`
const Container = styled.div`
   margin: 20px auto;
   width: 1400px;
   background: rgba(0, 0, 0, 0.4);
   backdrop-filter: blur(5px);
   border-radius: 10px;
   height: 50px;
   display: flex;
   align-items: center;
   padding: 0 135px;
   justify-content: space-between;
`
const LogoImg = styled.img`
   cursor: pointer;
`
// const Box = styled.div`
//    padding: 0 135px;
//    display: flex;
//    align-items: center;
// `

const NavList = styled.ul`
   display: flex;
   align-items: center;
   gap: 25px;

   .active {
      text-decoration-line: underline;
   }
`

const StyledNavLink = styled(NavLink)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   text-transform: lowercase;
   color: #fefbfb;

   :hover {
      text-decoration-line: underline;
   }
`

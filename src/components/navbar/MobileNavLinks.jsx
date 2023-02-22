import React, { useState } from 'react'

import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'

import MobileLogo from '../../assets/images/mobileLogo.png'

import { MenuToggle } from './MenuToggle'

export function MobileNavLinks() {
   const [isOpen, setOpen] = useState(false)

   return (
      <NavLinksContainer>
         <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
         {isOpen && (
            <LinksContainer>
               <LinksWrapper>
                  <LinkItem>
                     <Link to="/main" onClick={() => setOpen(false)}>
                        Главная
                     </Link>
                  </LinkItem>
                  <LinkItem>
                     <Link to="/services" onClick={() => setOpen(false)}>
                        Услуги
                     </Link>
                  </LinkItem>
                  <LinkItem>
                     <Link to="/news" onClick={() => setOpen(false)}>
                        Новости
                     </Link>
                  </LinkItem>
                  <LinkItem>
                     <Link to="/works" onClick={() => setOpen(false)}>
                        Наши работы
                     </Link>
                  </LinkItem>
                  <InfoPart>
                     <p>г. Бишкек</p>
                     <a href="tel:+996552570755">+996 (552) 57 07 55</a>
                  </InfoPart>
               </LinksWrapper>
               <MobileLogoImg src={MobileLogo} alt="" />
            </LinksContainer>
         )}
      </NavLinksContainer>
   )
}

const NavLinksContainer = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
`

const LinksWrapper = styled.ul`
   display: flex;
   height: 100%;
   width: 100%;
   flex-direction: column;
`

const LinkItem = styled.li`
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 17px;
   color: #001645;
   margin-bottom: 10px;
`

const Link = styled(RouteLink)`
   text-decoration: none;
   color: inherit;
   font-size: inherit;
`
const LinksContainer = styled.div`
   background: #f9f9f9;
   position: fixed;
   top: 65px;
   padding: 10px 10px;
   left: 0;
   height: 300px;
   z-index: 99;
   display: flex;
   height: 300px;
   justify-content: space-between;
   width: 100%;
`
const MobileLogoImg = styled.img`
   width: 36px;
   height: 16px;
`
const InfoPart = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   p,
   a {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #001645;
   }
`

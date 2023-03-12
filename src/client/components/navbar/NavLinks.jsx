import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavLinks = () => {
   return (
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
   )
}

export default NavLinks

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
   font-weight: 300;
   font-size: 18px;
   text-transform: lowercase;
   color: #fefbfb;

   :hover {
      text-decoration-line: underline;
      color: #fefbfb;
   }
`

import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
   CContainer,
   CHeader,
   CHeaderBrand,
   CHeaderDivider,
   CHeaderNav,
   CHeaderToggler,
   CNavLink,
   CNavItem,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
   const dispatch = useDispatch()
   const sidebarShow = useSelector((state) => state.sidebarShow)

   return (
      <CHeader position="sticky" className="mb-4">
         <CContainer fluid>
            <CHeaderToggler
               className="ps-1"
               onClick={() =>
                  dispatch({ type: 'set', sidebarShow: !sidebarShow })
               }
            >
               <CIcon icon={cilMenu} size="lg" />
            </CHeaderToggler>
            <CHeaderBrand className="mx-auto d-md-none" to="/">
               {/* <CIcon icon={logo} height={48} alt="Logo" /> */}
               {/* here we can put logo */}
            </CHeaderBrand>
            <CHeaderNav className="d-none d-md-flex me-auto">
               <CNavItem>
                  <CNavLink to="/admin/dashboard" component={NavLink}>
                     Dashboard
                  </CNavLink>
               </CNavItem>
               <CNavItem>
                  <CNavLink href="#">Users</CNavLink>
               </CNavItem>
               <CNavItem>
                  <CNavLink href="#">Settings</CNavLink>
               </CNavItem>
            </CHeaderNav>
            <CHeaderNav>
               <CNavItem>
                  <CNavLink href="#">
                     <CIcon icon={cilBell} size="lg" />
                  </CNavLink>
               </CNavItem>
               <CNavItem>
                  <CNavLink href="#">
                     <CIcon icon={cilList} size="lg" />
                  </CNavLink>
               </CNavItem>
               <CNavItem>
                  <CNavLink href="#">
                     <CIcon icon={cilEnvelopeOpen} size="lg" />
                  </CNavLink>
               </CNavItem>
            </CHeaderNav>
            <CHeaderNav className="ms-3">
               <AppHeaderDropdown />
            </CHeaderNav>
         </CContainer>
         <CHeaderDivider />
      </CHeader>
   )
}

export default AppHeader

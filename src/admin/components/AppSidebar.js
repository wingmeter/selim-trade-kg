/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

// import CIcon from '@coreui/icons-react'
import {
   CSidebar,
   CSidebarBrand,
   CSidebarNav,
   CSidebarToggler,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import SimpleBar from 'simplebar-react'

import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import { ReactComponent as LogoNegative } from '../assets/brand/logo.svg'

import { AppSidebarNav } from './AppSidebarNav'

const AppSidebar = () => {
   const dispatch = useDispatch()
   const unfoldable = useSelector((state) => state.sidebarUnfoldable)
   const sidebarShow = useSelector((state) => state.sidebarShow)

   return (
      <CSidebar
         position="fixed"
         unfoldable={unfoldable}
         visible={sidebarShow}
         onVisibleChange={(visible) => {
            dispatch({ type: 'set', sidebarShow: visible })
         }}
      >
         <CSidebarBrand className="d-none d-md-flex" to="/admin">
            <LogoNegative />
         </CSidebarBrand>
         <CSidebarNav>
            <SimpleBar>
               <AppSidebarNav items={navigation} />
            </SimpleBar>
         </CSidebarNav>
         <CSidebarToggler
            className="d-none d-lg-flex"
            onClick={() =>
               dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })
            }
         />
      </CSidebar>
   )
}

export default React.memo(AppSidebar)

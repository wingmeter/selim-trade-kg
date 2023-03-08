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
import {
   setUnfoldble,
   toggleSidebar,
} from '../../store/admin/sidebar/sidebarSlice'
import navigation from '../_nav'
import { ReactComponent as LogoNegative } from '../assets/brand/logo.svg'

import { AppSidebarNav } from './AppSidebarNav'

const AppSidebar = () => {
   const dispatch = useDispatch()

   const { sidebarShow, unfoldable } = useSelector((state) => state.sidebar)

   const toggleSideBarHandler = (visible) => {
      dispatch(toggleSidebar({ sidebarShow: visible }))
   }
   return (
      <CSidebar
         position="fixed"
         unfoldable={unfoldable.unfoldable}
         visible={sidebarShow.sidebarShow}
         onVisibleChange={(visible) => {
            toggleSideBarHandler(visible)
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
               dispatch(setUnfoldble({ unfoldable: !unfoldable.unfoldable }))
            }
         />
      </CSidebar>
   )
}

export default React.memo(AppSidebar)

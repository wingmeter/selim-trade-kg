import {
   cilChart,
   // cilDoor,
   cilMobileLandscape,
   cilNotes,
   cilOpentype,
   cilPeople,
   cilSettings,
   cilSpeedometer,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavItem } from '@coreui/react'

const nav = [
   {
      component: CNavItem,
      name: 'Dashboard',
      to: '/admin/dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   },
   {
      component: CNavItem,
      name: 'New Order',
      to: '/admin/order',
      icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      badge: {
         color: 'info',
         text: 'order',
      },
   },
   {
      component: CNavItem,
      name: 'News',
      to: '/admin/news',
      icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
   },
   {
      component: CNavItem,
      name: 'Reviews',
      to: '/admin/reviews',
      icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
   },
   // {
   //    component: CNavItem,
   //    name: 'Gates',
   //    to: '/admin/gates',
   //    icon: <CIcon icon={cilDoor} customClassName="nav-icon" />,
   // },
   {
      component: CNavItem,
      name: 'Our Works',
      to: '/admin/works',
      icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
   },
   {
      component: CNavItem,
      name: 'Gate types',
      to: '/admin/gate-types',
      icon: <CIcon icon={cilOpentype} customClassName="nav-icon" />,
   },
   {
      component: CNavItem,
      name: 'Something else',
      to: '/admin/dashboard',
      icon: <CIcon icon={cilMobileLandscape} customClassName="nav-icon" />,
   },
]

export default nav

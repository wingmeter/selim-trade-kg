import {
   cilChart,
   cilNotes,
   cilOpentype,
   cilPeople,
   cilSettings,
   cilSpeedometer,
   cilUserX,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavItem } from '@coreui/react'

import { ROLES } from '../utils/constants'

const nav = [
   {
      component: CNavItem,
      name: 'Dashboard',
      to: '/admin/dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   },
   {
      component: CNavItem,
      name: 'Заявки',
      to: '/admin/order',
      icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      badge: {
         color: 'info',
         text: '+1',
      },
   },
   {
      component: CNavItem,
      name: 'Новости',
      to: '/admin/news',
      icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
   },
   {
      component: CNavItem,
      name: 'Отзывы',
      to: '/admin/reviews',
      icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
   },
   {
      component: CNavItem,
      name: 'Наши работы',
      to: '/admin/works',
      icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
   },
   {
      component: CNavItem,
      name: 'Типы ворот',
      to: '/admin/gate-types',
      icon: <CIcon icon={cilOpentype} customClassName="nav-icon" />,
   },
   {
      component: CNavItem,
      name: 'Admin Controls',
      to: '/admin/controls',
      role: ROLES.SUPER_ADMIN,
      icon: <CIcon icon={cilUserX} customClassName="nav-icon" />,
   },
]

export default nav

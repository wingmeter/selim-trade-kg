/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'

import { CBadge } from '@coreui/react'
import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

import { ROLES } from '../../utils/constants'

export const AppSidebarNav = ({ items }) => {
   const { role } = useSelector((state) => state.auth)
   const location = useLocation()
   const navLink = (name, icon, badge) => {
      return (
         <>
            {icon && icon}
            {name && name}
            {badge && (
               <CBadge color={badge.color} className="ms-auto">
                  {badge.text}
               </CBadge>
            )}
         </>
      )
   }

   const navItem = (item, index) => {
      const { component, name, badge, icon, ...rest } = item
      const Component = component

      if (item.role) {
         if (item.role === role) {
            ;<Component
               {...(rest.to &&
                  !rest.items && {
                     component: NavLink,
                  })}
               key={index}
               {...rest}
            >
               {navLink(name, icon, badge)}
            </Component>
         } else {
            return null
         }
      }
      return (
         <Component
            {...(rest.to &&
               !rest.items && {
                  component: NavLink,
               })}
            key={index}
            {...rest}
         >
            {navLink(name, icon, badge)}
         </Component>
      )
   }
   const navGroup = (item, index) => {
      const { component, name, icon, to, ...rest } = item
      const Component = component
      return (
         <Component
            idx={String(index)}
            key={index}
            toggler={navLink(name, icon)}
            visible={location.pathname.startsWith(to)}
            {...rest}
         >
            {item.items?.map((item, index) =>
               item.items ? navGroup(item, index) : navItem(item, index)
            )}
         </Component>
      )
   }

   return (
      <>
         {items &&
            items.map((item, index) =>
               item.items ? navGroup(item, index) : navItem(item, index)
            )}
      </>
   )
}

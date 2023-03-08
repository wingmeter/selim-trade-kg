import React from 'react'

import {
   cilBell,
   cilCommentSquare,
   cilEnvelopeOpen,
   cilSettings,
   cilUser,
   cilAccountLogout,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
   CAvatar,
   CBadge,
   CDropdown,
   CDropdownDivider,
   CDropdownHeader,
   CDropdownItem,
   CDropdownMenu,
   CDropdownToggle,
} from '@coreui/react'

import avatar8 from '../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
   return (
      <CDropdown variant="nav-item">
         <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
            <CAvatar src={avatar8} size="md" />
         </CDropdownToggle>
         <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownHeader className="bg-light fw-semibold py-2">
               Account
            </CDropdownHeader>
            <CDropdownItem href="#">
               <CIcon icon={cilBell} className="me-2" />
               Orders
               <CBadge color="info" className="ms-2">
                  42
               </CBadge>
            </CDropdownItem>
            <CDropdownItem href="#">
               <CIcon icon={cilEnvelopeOpen} className="me-2" />
               Messages
               <CBadge color="success" className="ms-2">
                  42
               </CBadge>
            </CDropdownItem>
            <CDropdownItem href="#">
               <CIcon icon={cilCommentSquare} className="me-2" />
               Feadbacks
               <CBadge color="warning" className="ms-2">
                  42
               </CBadge>
            </CDropdownItem>
            <CDropdownHeader className="bg-light fw-semibold py-2">
               Settings
            </CDropdownHeader>
            <CDropdownItem href="#">
               <CIcon icon={cilUser} className="me-2" />
               Profile
            </CDropdownItem>
            <CDropdownItem href="#">
               <CIcon icon={cilSettings} className="me-2" />
               Settings
            </CDropdownItem>

            <CDropdownDivider />
            <CDropdownItem href="#">
               <CIcon icon={cilAccountLogout} className="me-2" />
               Log Out
            </CDropdownItem>
         </CDropdownMenu>
      </CDropdown>
   )
}

export default AppHeaderDropdown

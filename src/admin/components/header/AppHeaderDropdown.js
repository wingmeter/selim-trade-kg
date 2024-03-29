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
import { useSelector } from 'react-redux'

import { useLazyLogOutAdminQuery } from '../../../store/admin/auth/authApi'
import { getErrorMessage, logOut } from '../../../utils/helpers/general'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../UI/notification/Notification'

const AppHeaderDropdown = () => {
   const { adminData } = useSelector((state) => state.auth)
   const [logOutAdmin, { isLoading }] = useLazyLogOutAdminQuery()

   const logoutHandler = async () => {
      try {
         await logOutAdmin().unwrap()
         logOut()
         showSuccessMessage({ message: 'Successfully loged out!' })
      } catch (error) {
         showErrorMessage({ message: getErrorMessage(error) })
      }
   }

   return (
      <CDropdown variant="nav-item">
         <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
            <CAvatar
               color="secondary"
               className="me-3"
               size="md"
               alt="admin-img"
            >
               {adminData?.username?.split('')[0]?.toUpperCase() || 'A'}
            </CAvatar>
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
               <CIcon icon={cilUser} className="me-2" />
               Profile
            </CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem
               style={{ cursor: 'pointer' }}
               onClick={logoutHandler}
               disabled={isLoading}
            >
               <CIcon icon={cilAccountLogout} className="me-2" />
               Log Out
            </CDropdownItem>
         </CDropdownMenu>
      </CDropdown>
   )
}

export default AppHeaderDropdown

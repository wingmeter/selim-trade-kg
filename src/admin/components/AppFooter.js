import React from 'react'

import { CFooter } from '@coreui/react'

const AppFooter = () => {
   return (
      <CFooter>
         <div>
            <span className="ms-1">
               &copy; 2023 Selim Trade. Данный сайт защищён от копирования.
               Любая передача данных в интернете запрещена.
            </span>
         </div>
         <div className="ms-auto ">
            <span className="me-1 ">developed by </span>
            <strong style={{ fontSize: '12px', textAlign: 'center' }}>
               Syimyk and Nurseyit
            </strong>
         </div>
      </CFooter>
   )
}

export default React.memo(AppFooter)

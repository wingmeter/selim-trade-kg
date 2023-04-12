import { Outlet } from 'react-router'

import Footer from './elements/Footer'
import Header from './elements/Header'

const AppLayout = () => {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   )
}

export default AppLayout

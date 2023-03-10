import React from 'react'

import { Outlet } from 'react-router'

// import styled from 'styled-components'

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

// const Main = styled.main`
//    width: 100%;
//    min-height: 100vh;
// `

// const Container = styled.div`
//    margin: 0 auto;
//    max-width: 1440px;
// `

import React from 'react'

import styled from 'styled-components'

import Footer from './elements/Footer'
import Header from './elements/Header'

const AppLayout = ({ children }) => {
   return (
      <>
         <Header />
         <Main>
            <Container>{children}</Container>
         </Main>
         <Footer />
      </>
   )
}

export default AppLayout

const Main = styled.main`
   width: 100%;
   min-height: 100vh;
`

const Container = styled.div`
   margin: 0 auto;
   max-width: 1440px;
`

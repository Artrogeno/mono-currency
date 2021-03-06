import React from 'react'

import LayoutProvider from '../contexts/layout'
import { IProps } from '../interfaces/props'

import Header from '../components/header'
import NavLeft from '../components/navleft'
import Main from '../components/main'
import Footer from '../components/footer'

const PrivateLayout: React.FC<IProps> = ({ children }) => {
  return (
    <LayoutProvider>
      <Header />
      <NavLeft />
      <Main>{children}</Main>
      <Footer />
    </LayoutProvider>
  )
}

export default PrivateLayout

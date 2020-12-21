import React, { useContext } from 'react'

import { LayoutContext } from '../../contexts/layout'
import { Container, Line } from './styles'

const Hamburger = () => {
  const [layout, setLayout] = useContext(LayoutContext)

  const canActive = (): string => {
    return layout.nav ? 'active' : ''
  }

  const toggleNav = () => {
    const updateLayout = { ...layout, nav: !layout.nav }
    setLayout(updateLayout)
  }

  return (
    <Container onClick={toggleNav} className={canActive()}>
      <Line />
      <Line />
      <Line />
    </Container>
  )
}

export default Hamburger

import React, { useContext } from 'react'

import { LayoutContext } from '../../contexts/layout'
import { Container } from './styles'

const Footer: React.FC = () => {
  const [layout] = useContext(LayoutContext)
  return (
    <Container className={layout.nav ? 'open' : ''}>
      <span>Footer</span>
    </Container>
  )
}

export default Footer

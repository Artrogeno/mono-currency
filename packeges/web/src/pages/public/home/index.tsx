import React from 'react'

import Switch from '../../../shared/components/switch'
import { Container, Nav, Link, Title } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </Nav>
      <Title>Home</Title>
      <Switch />
    </Container>
  )
}

export default Home

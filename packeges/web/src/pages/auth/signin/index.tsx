import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Form from './components/form'
import { Container, Nav, Link, Title } from './styles'

const SignIn: React.FC<RouteComponentProps> = props => {
  return (
    <Container>
      <Nav>
        <Link to="/">Back</Link>
        <Link to="/signup">Sign Up</Link>
      </Nav>
      <Title>SignIn</Title>
      <Form {...props} />
    </Container>
  )
}

export default SignIn

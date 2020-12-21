import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Form from './components/form'
import { Container, Nav, Link, Title } from './styles'

const SignUp: React.FC<RouteComponentProps> = props => {
  return (
    <Container>
      <Nav>
        <Link to="/">Back</Link>
        <Link to="/signin">Sign In</Link>
      </Nav>
      <Title>Sign Up</Title>
      <Form {...props} />
    </Container>
  )
}

export default SignUp

import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { RouteComponentProps } from 'react-router-dom'

import { LoginServer } from '../../../server'
import { AuthContext } from 'shared/contexts/auth'
import { FormContainer, FormGroup, Input, Label, Button } from './styles'

const Form: React.FC<RouteComponentProps> = ({ history }) => {
  const [auth, setAuth] = useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      let errors: any = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      }
      return errors
    },
    onSubmit: values => {
      handlerLogin(values)
    },
  })

  const handlerLogin = async (body: any) => {
    const { token, profile } = await LoginServer(body)
    console.log({ token, profile })
    if (token) {
      setAuth({ ...auth, isAuth: true, token, profile })
      history.push('/dash')
    }
  }

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </FormContainer>
  )
}

export default Form

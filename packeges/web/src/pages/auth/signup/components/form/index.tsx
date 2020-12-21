import React from 'react'
import { useFormik } from 'formik'
import { RouteComponentProps } from 'react-router-dom'

import { validateInputs } from './validate'
import {
  FormContainer,
  FormGroup,
  FormLineGroup,
  Input,
  Label,
  Button,
  ContainerPassword,
} from './styles'

const Form: React.FC<RouteComponentProps> = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: validateInputs,
    onSubmit: values => {
      // handlerLogin(values)
      console.log({ values })
    },
  })

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <FormLineGroup>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="JJoaquim"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Jhon Joaquim"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@domin.com"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormGroup>
      </FormLineGroup>
      <FormLineGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <ContainerPassword>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="* * * * * * *"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="* * * * * * *"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </ContainerPassword>
        </FormGroup>
        <FormGroup>
          <Button type="submit">Submit</Button>
        </FormGroup>
      </FormLineGroup>
    </FormContainer>
  )
}

export default Form

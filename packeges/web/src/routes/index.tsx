import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './private'

import SignIn from '../pages/auth/signin'
import SignUp from '../pages/auth/signup'

import Home from '../pages/public/home'

import Dash from '../pages/private/dash'
import Users from '../pages/private/users'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <PrivateRoute path="/dash" component={Dash} />
    <PrivateRoute path="/users" component={Users} />
  </Switch>
)

export default Routes

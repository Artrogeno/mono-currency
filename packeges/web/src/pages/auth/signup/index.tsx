import React from 'react'
import { Link } from 'react-router-dom'

const SignUp: React.FC = () => {
  return (
    <div>
      <Link to="/">Back</Link>
      <br />
      <Link to="/signin">Sign In</Link>
      <br />
      <br />
      <h2>SignUp</h2>
    </div>
  )
}

export default SignUp

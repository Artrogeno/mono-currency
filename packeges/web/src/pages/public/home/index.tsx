import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      <Link to="/signin">Sign In</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
      <br />
      <br />
      <h2>Home</h2>
    </div>
  )
}

export default Home

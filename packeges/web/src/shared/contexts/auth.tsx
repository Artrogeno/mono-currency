import React, { useState } from 'react'

import { IProps } from '../interfaces/props'
import { IAuth } from '../interfaces/auth'

export const AuthContext = React.createContext<any>([])

const initialValue: IAuth = {
  token: '',
  isAuth: true,
}

const Provider: React.FC<IProps> = ({ children }) => {
  const [auth, setAuth] = useState<IAuth>(initialValue)
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

export default Provider

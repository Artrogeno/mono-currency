import React, { useState } from 'react'

import { ILayout } from '../interfaces/layout'

interface Props {
  children: React.ReactNode
}

export const LayoutContext = React.createContext<any>([])

const defaultValue: ILayout = {
  nav: false,
}

const Provider: React.FC<Props> = ({ children }) => {
  const [layout, setLayout] = useState<ILayout>(defaultValue)
  return (
    <LayoutContext.Provider value={[layout, setLayout]}>
      {children}
    </LayoutContext.Provider>
  )
}

export default Provider

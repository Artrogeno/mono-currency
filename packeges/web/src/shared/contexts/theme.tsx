import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { IProps } from '../interfaces/props'
import STORAGE from '../constants/storage'
import useStore from '../hooks/useStore'
import themes from '../styles/themes'

export const ThemeContext = React.createContext<any>([])

const Provider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useStore<DefaultTheme>(STORAGE.THEME, themes.dark)

  console.log({ theme })
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Provider

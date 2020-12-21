import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './shared/styles/global'
import AuthProvider from './shared/contexts/auth'
import ThemeProvider from './shared/contexts/theme'
import Routes from './routes'

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
)

export default App
